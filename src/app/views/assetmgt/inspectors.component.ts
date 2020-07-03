import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbDate, NgbModule, NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServiceService } from '../../global-service.service';
import { Subject } from 'rxjs';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


class Node {
  id: string;
  name: string;

}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}



@Component({
  selector: 'app-inspectors',
  templateUrl: './inspectors.component.html',
  styles: [
  ],
})
export class InspectorsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  nodes: Node[];

  constructor(
    private http: HttpClient,
    public router:Router,
    public globalservice:GlobalServiceService,
    private modalService: NgbModal

    ) {

      let stateres = null;
      let lgares = null;

      this.globalservice.search('states',this.searchStateTerm$)
      .subscribe(results => {
        stateres = results;

        if(stateres.data.states.data.length < 1){

          this.searchStateTerm$.next('');

        }
        else{
          this.allState = stateres.data.states.data;

        }
        // this.allDep = depres.data.depots.data;
        console.log(this.allState);
      });


      this.globalservice.search('states',this.esearchStateTerm$)
      .subscribe(results => {
        stateres = results;

        if(stateres.data.states.data.length < 1){

          this.esearchStateTerm$.next('');

        }
        else{
          this.allState = stateres.data.states.data;

        }

        // this.allDep = depres.data.depots.data;
        console.log(this.allState);
      });



      this.globalservice.search('lgas',this.searchLgaTerm$)
      .subscribe(results => {
        lgares = results;

        if(lgares.data.lgas.data.length < 1){

          this.searchLgaTerm$.next('');

        }
        else{
          this.allLga = lgares.data.lgas.data;

        }
        // this.allDep = depres.data.depots.data;
        console.log(this.allLga);
      });


      this.globalservice.search('lgas',this.esearchLgaTerm$)
      .subscribe(results => {
        lgares = results;

        if(lgares.data.lgas.data.length < 1){

          this.esearchLgaTerm$.next('');

        }
        else{
          this.allLga = lgares.data.lgas.data;

        }

        // this.allDep = depres.data.depots.data;
        console.log(this.allLga);
      });











    }


allState: Object;
allLga: Object;

searchStateTerm$ = new Subject<string>();
esearchStateTerm$ = new Subject<string>();


searchLgaTerm$ = new Subject<string>();
esearchLgaTerm$ = new Subject<string>();


stated = [];
estated = [];

lgad = [];
elgad = [];

edstateplace:any;
edlgaplace:any;

dropdownSettings:IDropdownSettings = {};


onItemSelect(item: any,nodekey, inskey?) {
  console.log(item);

  if(nodekey == 'state'){
    // this.depotd = item;
    this.address.state = item.name;

  }


  if(nodekey == 'estate'){
    // this.edepotd = item;
    this.eaddress.state = item.name;

  }

  if(nodekey == 'lga'){
    // this.depotd = item;
    this.address.lga = item.name;

  }


  if(nodekey == 'elga'){
    // this.edepotd = item;
    this.eaddress.lga = item.name;

  }

}





onItemDeSelect(item: any,nodekey, inskey?) {
  console.log(item);

  if(nodekey == 'state'){
    // this.depotd = item;
    this.address.state = "";

  }


  if(nodekey == 'estate'){
    // this.edepotd = item;
    this.eaddress.state = "";

  }

  if(nodekey == 'lga'){
    // this.depotd = item;
    this.address.lga = "";

  }


  if(nodekey == 'elga'){
    // this.edepotd = item;
    this.eaddress.lga = "";

  }

}





onFilterChange(item: any,nodekey) {
  console.log(item);

  if(nodekey == 'state'){
    this.searchStateTerm$.next(item);
  }

  if(nodekey == 'estat'){
    this.esearchStateTerm$.next(item);
  }


  if(nodekey == 'lga'){
    this.searchLgaTerm$.next(item);
  }

  if(nodekey == 'elga'){
    this.esearchLgaTerm$.next(item);
  }


}



getAllNode(node){

  // this.globalservice.getAllEntityFilt(node,filt)
  this.globalservice.getAllEntity(node)
  .then(data => {

    // this.load= false;
    console.log(data);

    this.res = data;

    if(this.res.status == "success"){

      if(node=='states'){

        this.allState = this.res.data.states.data;
      }

      if(node=='lgas'){

        this.allLga = this.res.data.lgas.data;
      }



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

  jSON = JSON;



  parsAdd(node){
    let pnode = JSON.parse(this.globalservice.decodeHtml(node.address));
    let res = "";
    for (let [key, value] of Object.entries(pnode)) {
      // console.log(`${key}: ${value}`);
      res += `${key.toUpperCase()}: ${value}`+" || ";
    }

    // console.log(pnode);
    // console.log(res);
    return res.slice(0, -3);
  }


  imgUrl(node){

    return node.licence_cert_url;
  }

  policy = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;



  ngOnInit(): void {
    const that = this;

    this.getAllNode("states");
    this.getAllNode("lgas");



    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      closeDropDownOnSelection: true,
      itemsShowLimit: 3,
      allowSearchFilter: true,
      clearSearchFilter: true
    };



    console.log('resp');


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
            'https://app05.sahara-group.com/pjh-api/public/api/dt/inspectors',
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
          },
          err => {console.log(err)}
          );
      },
      columns: [{ data: 'id' },
      { data: 'name' }]
    };

  }




  // add new modal
  closeResult = '';

  name = '';

  address = {
    lga:'',
    state:'',
    street:'',
    house_number:'',
    desc:''
  };


  ename = '';

  eaddress = {
    lga:'',
    state:'',
    street:'',
    house_number:'',
    desc:''
  };



  res:any = null;
  load:any = false;
  eload:any = false;

  inputSuccess:any = "";
  inputErr:any = "";

  validateNew(){
    let voter = 0;

    if(this.name.length >= 2){
      voter++;
    }



    if(this.address.lga.length >= 2){
      voter++;

    }

    if(this.address.state.length >= 2){
      voter++;

    }

    if(this.address.house_number.length >= 1){
      voter++;

    }

    if(this.address.street.length >= 2){
      voter++;

    }

    if(this.address.desc.length >= 2){
      voter++;

    }

    // console.log(voter);
    if(voter < 6){
      this.inputErr = "Please Ensure All Fields Are Correctly Filled";

      return false;
    }
    else{
      this.inputErr = "";

      return true;
    }

  }

  validateEdit(){

    let voter = 0;

    if(this.ename.length >= 2){
      voter++;
    }


    if(this.eaddress.lga.length >= 2){
      voter++;

    }

    if(this.eaddress.state.length >= 2){
      voter++;

    }


    if(this.eaddress.house_number.length >= 1){
      voter++;

    }

    if(this.eaddress.street.length >= 2){
      voter++;

    }

    if(this.eaddress.desc.length >= 2){
      voter++;

    }

    // console.log(voter);
    if(voter < 6){
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

    this.inputErr = "";
    this.inputSuccess = "";

    let addy = JSON.parse(this.globalservice.decodeHtml(node.address));

    this.ename = node.name;

    this.eaddress = {
      lga:addy.lga,
      state:addy.state,
      street:addy.street,
      house_number:addy.house_number,
      desc:addy.desc
    };


    this.edstateplace = addy.state;
    this.edlgaplace = addy.lga;

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

    let nodeObj =  {
      name: this.ename,
      address: JSON.stringify(this.eaddress),
      };

      console.log(nodeObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.edID,nodeObj,'inspectors')
    .then(data => {

      this.eload= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Inspector Edited Successfully";


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

    this.globalservice.delNode(node.id,"inspectors")
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Inspector Deleted Successfully";
        setTimeout(function () {
          alert("Inspector Deleted Successfully");
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

    let nodeObj =  {
      name: this.name,

      address: JSON.stringify(this.address),
      };

      console.log(nodeObj);
    const that = this;


      // return;
    this.load = true;

    this.globalservice.newNode(nodeObj,'inspectors')
    .then(data => {

      this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Inspector Created Successfully";
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