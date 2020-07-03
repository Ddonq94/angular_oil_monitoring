import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbDate, NgbModule, NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServiceService } from '../../global-service.service';




class Person {
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
  selector: 'app-usermgt',
  templateUrl: './usermgt.component.html',
  styleUrls: ['./usermgt.component.css']
})
export class UsermgtComponent implements OnInit {


  model:NgbDateStruct;

  dtOptions: DataTables.Settings = {};
  persons: Person[];

  constructor(
    private http: HttpClient,
    public router:Router,
    public globalservice:GlobalServiceService,
    private modalService: NgbModal

    ) {}


  refresh(){
    window.location.reload();

    // this.ngOnInit();
    this.router.navigate(['/usermgt/']);


  }

  ngOnInit(): void {
    const that = this;

    // this.dtOptions = {
    //   pageLength: 5,
    //   pagingType: 'full_numbers'
    // };
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
            'https://app05.sahara-group.com/pjh-api/public/api/dt/users',
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
            that.persons = resp.data;

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




  // add new modal
  closeResult = '';
  fname = '';
  mname = '';
  lname = '';
  email = '';
  pword = '';
  cpword = '';
  efname = '';
  emname = '';
  elname = '';
  eemail = '';
  epword = '';
  ecpword = '';
  res:any = null;
  load:any = false;
  eload:any = false;

  inputSuccess:any = "";
  inputErr:any = "";

  validateNew(){

    let voter = 0;

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

    // console.log(voter);
    if(voter < 5){
      return false;
    }
    else{
      return true;
    }

  }

  validateEdit(){

    let voter = 0;

    if(this.efname.length >= 2){
      voter++;
    }

    if(this.elname.length >= 2){
      voter++;

    }

    if(this.globalservice.IsEmail(this.eemail)){
      voter++;

    }

    if(this.epword.length >= 7){
      voter++;

    }

    if(this.epword == this.ecpword){
      voter++;

    }

    // console.log(voter);
    if(voter < 5){
      return false;
    }
    else{
      return true;
    }

  }

  edID = '';

  editModal(edContent, node){

    this.inputErr = "";
    this.inputSuccess = "";

    this.efname = node.first_name;
    this.emname = node.mid_name;
    this.elname = node.last_name;
    this.eemail = node.email;
    this.epword = '';
    this.ecpword = '';

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

    if(this.efname.length < 2){
      this.inputErr = "Invalid First Name";
      return;
    }

    if(this.elname.length < 2){
      this.inputErr = "Invalid Last Name";
      return;
    }

    if(!this.globalservice.IsEmail(this.eemail)){
      this.inputErr = "Invalid Email Address";
      return;
    }

    if(this.epword.length < 7){
      this.inputErr = "Password Must be Atleast 7 Characters";
      return;
    }

    if(this.epword != this.ecpword){
      this.inputErr = "Passwords do not Match";
      return;
    }

    let userObj =  {
      first_name: this.efname,
      mid_name: this.emname,
      last_name: this.elname,
      email: this.eemail,
      password: this.epword
      };

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

    if(this.fname.length < 2){
      this.inputErr = "Invalid First Name";
      return;
    }

    if(this.lname.length < 2){
      this.inputErr = "Invalid Last Name";
      return;
    }

    if(!this.globalservice.IsEmail(this.email)){
      this.inputErr = "Invalid Email Address";
      return;
    }

    if(this.pword.length < 7){
      this.inputErr = "Password Must be Atleast 7 Characters";
      return;
    }

    if(this.pword != this.cpword){
      this.inputErr = "Passwords do not Match";
      return;
    }

    let userObj =  {
      first_name: this.fname,
      mid_name: this.mname,
      last_name: this.lname,
      email:this.email,
      password: this.pword
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }




}
