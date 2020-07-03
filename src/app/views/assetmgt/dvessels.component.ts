import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalServiceService } from '../../global-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


class vessel {
  id: string;
  name: string;
  capacity: string;
  number: string;
  type: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-dvessels',
  templateUrl: './dvessels.component.html',
  styles: [
  ],
})
export class DvesselsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  vessels: vessel[];

  constructor(
    private http: HttpClient,
    public router:Router,
    public globalservice:GlobalServiceService,
    private modalService: NgbModal

    ) {}


  refresh(){
    window.location.reload();

    // this.ngOnInit();
    // this.router.navigate(['/assetmgt/mvmgt']);


  }

  policy = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;


  ngOnInit(): void {
    const that = this;


    const query = {
      where: [[["type", "=", "daughter"]]]
    };


    let filt = JSON.stringify(query);

    console.log(filt);

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
            // 'https://app05.sahara-group.com/pjh-api/public/api/dt/vessels',
            `https://app05.sahara-group.com/pjh-api/public/api/dt/vessels?filter=${filt}`,
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
            that.vessels = resp.data;

            console.log(resp);

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'name' }, { data: 'capacity' }, { data: 'number' }, { data: 'type' }]
    };

  }




  // add new modal
  closeResult = '';
  name = '';
  cap = 0;
  num = '';

  ename = '';
  ecap = 0;
  enum = '';


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

    if(this.cap >= 1){
      voter++;

    }

    if(this.num.length >= 2){
      voter++;

    }

    // console.log(voter);
    if(voter < 3){
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

    if(this.ecap >= 1){
      voter++;

    }

    if(this.enum.length >= 2){
      voter++;

    }

    // console.log(voter);
    if(voter < 3){
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

    this.ename = node.name;
    this.ecap = node.capacity;
    this.enum = node.number;


    this.edID = node.id;

    console.log(node);
    this.modalService.open(edContent, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  type = 'daughter';

  edit(){

    const that = this;

    console.log(this.edID);

    if(this.ename.length < 2){
      this.inputErr = "Invalid Vessel Name";
      return;
    }

    if(this.enum.length < 2){
      this.inputErr = "Invalid Vessel Number";
      return;
    }

    if(this.ecap < 1){
      this.inputErr = "Invalid Vessel Capacity";
      return;
    }


    let nodeObj =  {
      name: this.ename,
      number: this.enum,
      capacity: this.ecap,
      type: this.type
      };

      console.log(nodeObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.edID,nodeObj,"vessels")
    .then(data => {

      this.eload= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Vessel Edited Successfully";


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

    this.globalservice.delNode(node.id,"vessels")
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Vessel Deleted Successfully";
        setTimeout(function () {
          alert("Vessel Deleted Successfully");
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

    if(this.name.length < 2){
      this.inputErr = "Invalid Vessel Name";
      return;
    }

    if(this.num.length < 2){
      this.inputErr = "Invalid Vessel Number";
      return;
    }

    if(this.cap < 1){
      this.inputErr = "Invalid Vessel Capacity";
      return;
    }

    let nodeObj =  {
      name: this.name,
      number: this.num,
      capacity: this.cap,
      type: this.type
      };

      console.log(nodeObj);
    const that = this;


      // return;
    this.load = true;

    this.globalservice.newNode(nodeObj,"vessels")
    .then(data => {

      this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Vessel Created Successfully";
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
