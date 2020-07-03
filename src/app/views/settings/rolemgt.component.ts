import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbDate, NgbModule, NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServiceService } from '../../global-service.service';




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
  selector: 'app-rolemgt',
  templateUrl: './rolemgt.component.html',
  styles: [
  ],
})
export class RolemgtComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  nodes: Node[];

  constructor(
    private http: HttpClient,
    public router:Router,
    public globalservice:GlobalServiceService,
    private modalService: NgbModal

    ) {}


  refresh(){
    window.location.reload();

    // this.ngOnInit();
    // this.router.navigate(['/usermgt/']);


  }

  policyRol = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;


  ngOnInit(): void {
    const that = this;

    // this.dtOptions = {
    //   pageLength: 5,
    //   pagingType: 'full_numbers'
    // };
    console.log('resp');

    // const query = {
    //   where: [[["type", "=", "regulator"]]]
    // };

    //   let filt = JSON.stringify(query);



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
            `https://app05.sahara-group.com/pjh-api/public/api/dt/roles`,
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
      columns: [{ data: 'id' }, { data: 'name' }]
    };

  }



  type= "regulator";


  // add new modal
  closeResult = '';
  name = '';

  ename = '';

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



    // console.log(voter);
    if(voter < 1){
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



    // console.log(voter);
    if(voter < 1){
      this.inputErr = "Please Ensure All Fields Are Correctly Filled";

      return false;
    }
    else{
      this.inputErr = "";

      return true;
    }

  }


  handleCheckChange(key, skey, ed?){

    if(ed){
      this.epolicy[key][skey] = !this.epolicy[key][skey];
    }
    else{
      this.policy[key][skey] = !this.policy[key][skey];

    }
    console.log(this.policy[key][skey]);

  }


  parsePolicy(key, skey, ed?){
    // console.log(this.policy);
    if(ed){

      return this.epolicy ?  this.epolicy[key][skey] : false;
    }
    else{

      return this.policy ?  this.policy[key][skey] : false;
    }
  }



  edID = '';

  policy = {
    // lgas: {read: false, create: false, delete: false, update: false, 'change-status': false},
    // bills: {read: false, create: false, delete: false, update: false, 'change-status': false},
    roles: {read: false, create: false, delete: false, update: false, 'change-status': false},
    // state: {read: false, create: false, delete: false, update: false, 'change-status': false},
    users: {read: false, create: false, delete: false, update: false, 'change-status': false},
    depots: {read: false, create: false, delete: false, update: false, 'change-status': false},
    trucks: {read: false, create: false, delete: false, update: false, 'change-status': false},
    // devices: {read: false, create: false, delete: false, update: false, 'change-status': false},
    'mother-vessels': {read: false, create: false, delete: false, update: false, 'change-status': false},
    'daughter-vessels': {read: false, create: false, delete: false, update: false, 'change-status': false},
    // payments: {read: false, create: false, delete: false, update: false, 'change-status': false},
    products: {read: false, create: false, delete: false, update: false, 'change-status': false},
    // settings: {read: false, create: false, delete: false, update: false, 'change-status': false},
    stations: {read: false, create: false, delete: false, update: false, 'change-status': false},
    // anomalies: {read: false, create: false, delete: false, update: false, 'change-status': false},
    // locations: {read: false, create: false, delete: false, update: false, 'change-status': false},
  'dp2tk-txns': {read: false, create: false, delete: false, update: false, 'change-status': false},
  'dv2dp-txns': {read: false, create: false, delete: false, update: false, 'change-status': false},
  inspectors: {read: false, create: false, delete: false, update: false, 'change-status': false},
  'mv2dv-txns': {read: false, create: false, delete: false, update: false, 'change-status': false},
  // 'role-users': {read: false, create: false, delete: false, update: false, 'change-status': false},
  // 'st2kz-txns': {read: false, create: false, delete: false, update: false, 'change-status': false},
  'tk2st-txns': {read: false, create: false, delete: false, update: false, 'change-status': false},
  'depot-tanks': {read: false, create: false, delete: false, update: false, 'change-status': false},
  // preferences: {read: false, create: false, delete: false, update: false, 'change-status': false},
  // 'location-users': {read: false, create: false, delete: false, update: false, 'change-status': false},
  'stations-tanks': {read: false, create: false, delete: false, update: false, 'change-status': false}
};

  epolicy;
  keys;
  skeys = ['create','read','update','delete','change-status'];

  editModal(edContent, node){


    // this.role = JSON.parse(localStorage.getItem('sessionData'));

    // console.log(JSON.parse(role.roles[0].policy));
    // this.policy = JSON.parse( this.role.user.roles[0].policy);
    this.epolicy = JSON.parse( this.globalservice.decodeHtml(node.policy));

    this.keys = Object.keys( this.epolicy);
    // this.skeys = Object.keys( this.keys[0]);

    console.log( this.epolicy);
    // console.log(policy['lgas']);
    console.log( this.keys);
    console.log( this.skeys);

    this.inputErr = "";
    this.inputSuccess = "";

    this.ename = node.name;


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

    let nodeObj =  {
      name: this.ename,
      policy: JSON.stringify(this.epolicy)
      };

      console.log(nodeObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.edID,nodeObj,'roles')
    .then(data => {

      this.eload= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Role Edited Successfully";


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

    this.globalservice.delNode(node.id,"roles")
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Role Deleted Successfully";
        setTimeout(function () {
          alert("Role Deleted Successfully");
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

    let nodeObj =  {
      name: this.name,
      policy: JSON.stringify(this.policy)
      };

      console.log(nodeObj);
    const that = this;


      // return;
    this.load = true;

    this.globalservice.newNode(nodeObj,'roles')
    .then(data => {

      this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Role Created Successfully";
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

    this.keys = Object.keys( this.policy);

    this.modalService.open(content, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }




}
