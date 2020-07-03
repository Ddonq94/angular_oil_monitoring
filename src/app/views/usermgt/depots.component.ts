import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbDate, NgbModule, NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServiceService } from '../../global-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subject } from 'rxjs';




class Node {
  id: string;
  first_name: string;
  mid_name: string;
  last_name: string;
  email: string;
  telephone: string;
  company_name: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}



@Component({
  selector: 'app-depots',
  templateUrl: './depots.component.html',
  styles: [
  ],
})
export class DepotsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  nodes: Node[];

  constructor(
    private http: HttpClient,
    public router:Router,
    public globalservice:GlobalServiceService,
    private modalService: NgbModal

    ) {


      let roleres = null;
      this.globalservice.search('roles',this.searchRolesTerm$)
      .subscribe(results => {
        roleres = results;

        this.allRoles = roleres.data.roles.data;
        console.log(this.allRoles);
        console.log(roleres);
      });

      this.globalservice.search('roles',this.esearchRolesTerm$)
      .subscribe(results => {
        roleres = results;

        this.allRoles = roleres.data.roles.data;
        console.log(this.allRoles);
        console.log(roleres);
      });







      let coyres = null;
      this.globalservice.search('depots',this.searchCoyTerm$)
      .subscribe(results => {
        coyres = results;

        if(coyres.data.depots.data.length < 1){

          this.searchCoyTerm$.next('');

        }
        else{
          this.allCoy = coyres.data.depots.data;

        }
        // this.allDep = depres.data.depots.data;
        console.log(this.allCoy);
      });


      this.globalservice.search('depots',this.esearchCoyTerm$)
      .subscribe(results => {
        coyres = results;

        if(coyres.data.depots.data.length < 1){

          this.esearchCoyTerm$.next('');

        }
        else{
          this.allCoy = coyres.data.depots.data;

        }

        // this.allDep = depres.data.depots.data;
        console.log(this.allCoy);
      });




    }



    allCoy: Object;

    searchCoyTerm$ = new Subject<string>();
    esearchCoyTerm$ = new Subject<string>();

    coyd = [];
    ecoyd = [];

    edcoyplace:any;

    coy = "";
    ecoy = "";



    getAllNode(node){

      // this.globalservice.getAllEntityFilt(node,filt)
      this.globalservice.getAllEntity(node)
      .then(data => {

        // this.load= false;
        console.log(data);

        this.res = data;

        if(this.res.status == "success"){


            this.allCoy = this.res.data[node].data;

            console.log(this.allCoy);

        }
        else{
          alert("Something Failed");
        //   console.log("something failed in api", data);
        }

      },
      err=> {
        this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
        console.log(err);
        console.log('err');


      })
      .catch(err=> {
        this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
        console.log(err);
        console.log('err');


      })
      .finally(() => {
        // this.eload= false;

      });

    }





  refresh(){
    window.location.reload();

    // this.ngOnInit();
    // this.router.navigate(['/usermgt/']);


  }


  allRoles: Object;

  searchRolesTerm$ = new Subject<string>();
  esearchRolesTerm$ = new Subject<string>();



  parseRoles(node){


    if(node.roles){

      if(node.roles.length > 0){

        let res = '';

        // for (let [key, value] of node.roles) {
        //   // console.log(`${key}: ${value}`);
        //   res += `${value.name}`+" || ";

        // }

        node.roles.forEach(element => {
          // console.log(element);
          res += `${element.name}`+" || ";

              });

      return res.slice(0, -3);

      }
      else{
        return 'Not Found';

      }
    }
    else{

      return 'Not Found';
    }


  }


  dropdownSettings:IDropdownSettings = {};
  dropdownSettings1:IDropdownSettings = {};


role = '';
erole = '';

roleEdName;

roleArr = [];
eroleArr = [];

roled = '';
eroled = '';









onDeSelectAll(item: any,nodekey) {

  console.log(item);

  if(nodekey == 'role'){
    this.roleArr= item;
  console.log(this.roleArr);

  }
  if(nodekey == 'erole'){
    this.eroleArr = item;
  console.log(this.eroleArr);

  }
}


onSelectAll(item: any,nodekey) {
  console.log(typeof item);
  console.log(item[0]);

  let that = this;
  // return;
//  typeof item;
  if(nodekey == 'role'){

    item.forEach(element => {
console.log(element);
this.roleArr[element.id] = element.id;
    });



  console.log(this.roleArr);
  }

  if(nodekey == 'erole'){

    item.forEach(element => {
      console.log(element);
      this.eroleArr[element.id] = element.id;
      });

  console.log(this.eroleArr);
  }



}

  onItemDeSelect(item: any,nodekey) {
    console.log(item);

    if(nodekey == 'role'){
      // this.mvd = item;
      this.role = item.id;

      delete this.roleArr[item.id];

      console.log(this.roleArr);

    }

    if(nodekey == 'erole'){
      // this.emvd = item;
      this.erole = item.id;

      delete this.eroleArr[item.id];

      console.log(this.eroleArr);

    }


    if(nodekey == 'coy'){
      // this.depotd = item;
      this.coy = "";

    }


    if(nodekey == 'ecoy'){
      // this.edepotd = item;
      this.ecoy = "";

    }

  }


  onItemSelect(item: any,nodekey) {
    console.log(item);

    if(nodekey == 'role'){
      // this.mvd = item;
      this.role = item.id;

      this.roleArr[item.id] = item.id;
      console.log(this.roleArr);

    }

    if(nodekey == 'erole'){
      // this.emvd = item;
      this.erole = item.id;

      this.eroleArr[item.id] = item.id;
      console.log(this.eroleArr);

    }


    if(nodekey == 'coy'){
      // this.depotd = item;
      this.coy = item.id;

    }


    if(nodekey == 'ecoy'){
      // this.edepotd = item;
      this.ecoy = item.id;

    }

  }



  onFilterChange(item: any,nodekey) {
    console.log(item);


    if(nodekey == 'role'){
      this.searchRolesTerm$.next(item);
    }

    if(nodekey == 'erole'){
      this.esearchRolesTerm$.next(item);
    }



    if(nodekey == 'coy'){
      this.searchCoyTerm$.next(item);
    }

    if(nodekey == 'ecoy'){
      this.esearchCoyTerm$.next(item);
    }

  }





  getAllRoles(node){

    this.globalservice.getAllEntity(node)
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){

        this.allRoles = this.res.data.roles.data;


      }
      else{
        alert("Something Failed");
      //   console.log("something failed in api", data);
      }

    },
    err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');


    })
    .catch(err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');


    })
    .finally(() => {
      // this.eload= false;

    });

  }

  policy = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;


  ngOnInit(): void {
    const that = this;

    this.getAllRoles("roles");
    this.getAllNode("depots");


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      clearSearchFilter: true,
      // closeDropDownOnSelection: true
    };

    this.dropdownSettings1 = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      closeDropDownOnSelection: true,
      allowSearchFilter: true,
      clearSearchFilter: true,
      // closeDropDownOnSelection: true
    };


    // this.dtOptions = {
    //   pageLength: 5,
    //   pagingType: 'full_numbers'
    // };
    console.log('resp');


    const query = {
      where: [[["type", "=", "depot"]]]
    };

      let filt = JSON.stringify(query);


    this.dtOptions = {
      lengthMenu: [[1, 10, 25, 50, 100, 500, 1000], [1, 10, 25, 50, 100, 500, 1000]],
      pagingType: 'full_numbers',
      pageLength: 25,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            // 'https://angular-datatables-demo-server.herokuapp.com/',
            `https://app05.sahara-group.com/pjh-api/public/api/dt/users?filter=${filt}`,
            dataTablesParameters,
            // {Authorization: `Bearer ${that.globalservice.sessionToken}`}
            {
              // params: params,
              headers: new HttpHeaders().set(
                'Authorization',
                `Bearer ${localStorage.getItem('sessionToken')}`
              )
            }
          ).subscribe(resp => {
            that.nodes = resp.data;

            console.log(resp);

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'first_name' }, { data: 'mid_name' }, { data: 'last_name' }, { data: 'email' }, { data: 'telephone' }, { data: 'company_name' }]
    };

  }



  type= "depot";

  // add new modal
  closeResult = '';
  fname = '';
  mname = '';
  lname = '';
  email = '';
  pword = '';
  cpword = '';
  tel = "";
  parent= "";


  efname = '';
  emname = '';
  elname = '';
  eemail = '';
  epword = '';
  ecpword = '';
  etel = "";
  eparent= "";



  res:any = null;
  load:any = false;
  eload:any = false;

  inputSuccess:any = "";
  inputErr:any = "";

  validateNew(){

    let voter = 0;

    if(this.tel.length == 11 || this.tel.length == 9){
      voter++;
    }

    if(this.coy.length >= 2){
      voter++;
    }

    if(this.fname.length >= 2){
      voter++;
    }

    if(this.lname.length >= 2){
      voter++;

    }

    if(this.globalservice.IsEmail(this.email)){
      voter++;

    }

    if(this.pword.length >= 7){
      voter++;

    }

    if(this.pword == this.cpword){
      voter++;

    }

    if(Object.keys(this.roleArr).length > 0){
      voter++;
    }

    // console.log(this.roleArr.length);
    if(voter < 8){
      this.inputErr = "Please Ensure All Fields Are Correctly Filled";

      return false;
    }
    else{
      this.inputErr = "";

      return true;
    }

  }

   pass = 0;
  validateEdit(){

    let voter = 0;
    let count = 6;



    if(this.efname.length >= 2){
      voter++;
    }

    if(this.ecoy.length >= 2){
      voter++;
    }

    if(this.elname.length >= 2){
      voter++;

    }

    if(this.globalservice.IsEmail(this.eemail)){
      voter++;

    }


    if(this.epword.length > 0){
      this.pass = 1;
      count = 8;


      if(this.epword.length >= 7){
        voter++;

      }

      if(this.epword == this.ecpword){
        voter++;

      }

  }

    if(Object.keys(this.eroleArr).length > 0){
      voter++;
    }

    if(this.etel.length == 11 || this.etel.length == 9){
      voter++;
    }


    // console.log(voter);
    if(voter < count){
      this.inputErr = "Please Ensure All Fields Are Correctly Filled";

      return false;
    }
    else{
      this.inputErr = "";

      return true;
    }

  }

  edID = '';

  editModal(edContent, node){

    let temp =  node.roles.map(x => x.id);
    temp.forEach(element => {
this.eroleArr[element] = element;

    });


    // this.eroleArr =  node.roles.map(x => x.id);
    this.roleEdName =  node.roles.map(x => x.name).join();

    console.log(this.eroleArr);

    this.inputErr = "";
    this.inputSuccess = "";

    this.efname = node.first_name;
    this.etel = node.telephone;
    this.ecoy = node.depot_id;
    this.emname = node.mid_name;
    this.elname = node.last_name;
    this.eemail = node.email;
    this.epword = '';
    this.ecpword = '';

    this.edcoyplace = node.depot ? node.depot.name : "Not Found";

    this.edID = node.id;

    console.log(node);
    this.modalService.open(edContent, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }


  edit(){

    const that = this;

    console.log(this.edID);

    // if(this.efname.length < 2){
    //   this.inputErr = "Invalid First Name";
    //   return;
    // }

    // if(this.elname.length < 2){
    //   this.inputErr = "Invalid Last Name";
    //   return;
    // }

    // if(!this.globalservice.IsEmail(this.eemail)){
    //   this.inputErr = "Invalid Email Address";
    //   return;
    // }

    // if(this.epword.length < 7){
    //   this.inputErr = "Password Must be Atleast 7 Characters";
    //   return;
    // }

    // if(this.epword != this.ecpword){
    //   this.inputErr = "Passwords do not Match";
    //   return;
    // }

    let userObj =  {
      first_name: this.efname,
      telephone: this.etel,
      depot_id: this.ecoy,
      mid_name: this.emname,
      last_name: this.elname,
      email: this.eemail,
      password: this.epword,
      type:this.type,
      // roles: JSON.stringify( Object.keys(this.eroleArr))
      roles:  Object.keys(this.eroleArr)
    };

    if(this.pass == 0 ){

    delete userObj.password;

    }

      console.log(userObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.edID,userObj,'users')
    .then(data => {

      this.eload= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "User Edited Successfully";

        let id = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(localStorage.getItem('sessionData')).user.id : null;
        console.log(id);
        if(this.edID == id){
          alert("Logging out for changes to take effect");
        this.router.navigate(['/login/']);

        }


          setTimeout(function () {
            that.modalService.dismissAll();

            window.location.reload();

          }, 1000);
          //   this.globalservice.sessionToken = this.res.data.token;

      //   this.router.navigate(['/usermgt/']);
      }
      else{
        this.inputErr = this.res.mesage;
      //   console.log("something failed in api", data);
      }

    },
    err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');
      this.eload= false;

    })
    .catch(err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');
      this.eload= false;

    })
    .finally(() => {
      this.eload= false;

    });


  }


  del(node){

    let r=confirm('Confirm this operation. It cannot be undone');

    if(r==false){return false ;};

    console.log(node);

    this.globalservice.delNode(node.id,"users")
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "User Deleted Successfully";
        setTimeout(function () {
          alert("User Deleted Successfully");
          window.location.reload();

      }, 1000);


      }
      else{
        alert("Something Failed");
      //   console.log("something failed in api", data);
      }

    },
    err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');


    })
    .catch(err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');


    })
    .finally(() => {
      // this.eload= false;

    });

  }


  saveNew(){

    // if(this.fname.length < 2){
    //   this.inputErr = "Invalid First Name";
    //   return;
    // }

    // if(this.lname.length < 2){
    //   this.inputErr = "Invalid Last Name";
    //   return;
    // }

    // if(!this.globalservice.IsEmail(this.email)){
    //   this.inputErr = "Invalid Email Address";
    //   return;
    // }

    // if(this.pword.length < 7){
    //   this.inputErr = "Password Must be Atleast 7 Characters";
    //   return;
    // }

    // if(this.pword != this.cpword){
    //   this.inputErr = "Passwords do not Match";
    //   return;
    // }

    let userObj =  {
      first_name: this.fname,
      telephone: this.tel,
      depot_id: this.coy,
      mid_name: this.mname,
      last_name: this.lname,
      email:this.email,
      password: this.pword,
      type:this.type,
      roles: Object.keys(this.roleArr)
      };

      console.log(userObj);
    const that = this;


      // return;
    this.load = true;

    this.globalservice.newNode(userObj,'users')
    .then(data => {

      this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "User Created Successfully";
        setTimeout(function () {
        that.modalService.dismissAll();

        window.location.reload();

      }, 1000);
      //   this.globalservice.sessionToken = this.res.data.token;

      //   this.router.navigate(['/usermgt/']);
      }
      else{
        this.inputErr = this.res.mesage;
      //   console.log("something failed in api", data);
      }

    },
    err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');
      this.load= false;

    })
    .catch(err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');
      this.load= false;

    })
    .finally(() => {
      this.load= false;

    });

  }

  open(content){
    // this.modalService.open(content, { size: 'lg' });

    this.inputErr = "";
    this.inputSuccess = "";

    this.modalService.open(content, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


}
