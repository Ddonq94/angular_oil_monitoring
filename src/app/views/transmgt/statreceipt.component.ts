import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalServiceService } from '../../global-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



class node {
  id: string;
  station_id: string;
  volume: string;
  station: string;

}

class Node2 {
  // id: string;
  oil_marketer: string;
  volume_allocated: string;
  station_name: string;
}


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-statreceipt',
  templateUrl: './statreceipt.component.html',
  styles: [
  ],
})
export class StatreceiptComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  nodes: node[];

  dtOptions2: DataTables.Settings = {};
  nodes2: Node2[];

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




  parseStat(node){
    return node.station ? node.station.name : 'Not Found';
  }





  parseTruck(node){
    return node.truck ? node.truck.name : 'Not found';
  }


  policy = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;


  ngOnInit(): void {
    const that = this;

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
            'https://app05.sahara-group.com/pjh-api/public/api/dt/tk2st-txns',
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
      columns: [{ data: 'id' }, { data: 'station_id' }, { data: 'volume' }]
    };


    // -----------------------------------------------------


    this.dtOptions2 = {
      lengthMenu: [[1, 10, 25, 50, 100, 500, 1000], [1, 10, 25, 50, 100, 500, 1000]],
      pagingType: 'full_numbers',
      pageLength: 25,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            // 'https://angular-datatables-demo-server.herokuapp.com/',
            'https://app05.sahara-group.com/pjh-api/public/api/dt/station-dp2tk-txn-views',
            dataTablesParameters,
            // {Authorization: `Bearer ${that.globalservice.sessionToken}`}
            {
              // params: params,
              headers: new HttpHeaders().set(
                'Authorization',
                `Bearer ${localStorage.getItem('sessionToken')}`
              )
            }
          ).subscribe(resp2 => {
            that.nodes2 = resp2.data;

            console.log(resp2);

            callback({
              recordsTotal: resp2.recordsTotal,
              recordsFiltered: resp2.recordsFiltered,
              data: []
            });
          },
          err => {console.log(err)}
          );
      },
      columns: [
        // { data: 'id' },
      { data: 'oil_marketer' },
      { data: 'volume_allocated' },
      { data: 'station_name' },
    ]
    };


  }




  // add new modal
  closeResult = '';



  num = 0;


  enum = 0;


  res:any = null;
  load:any = false;
  eload:any = false;

  inputSuccess:any = "";
  inputErr:any = "";

  validateNew(){

    let voter = 0;


    if(this.num >= 1){
      voter++;

    }

    if(this.parentVol >= this.num){

      voter++;

    }


    // console.log(voter);
    if(voter < 2){
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


    if(this.enum >= 1){
      voter++;

    }

    // if(this.eparentVol >= this.enum){

    //   voter++;

    // }


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

  edID = '';

  editModal(edContent, node){

    this.inputErr = "";
    this.inputSuccess = "";

    this.enum = node.volume;

    this.eparentID = node.dp2tk_txn_id;
    this.estatID = node.station_id;


    this.eparentVol = parseInt(node.volume_allocated);


    console.log(this.parentID);

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
      dp2tk_txn_id: this.eparentID,

      volume: this.enum,
      volume_breakdown: '[]',
      station_id: this.estatID

      };

      console.log(nodeObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.edID,nodeObj,"tk2st-txns")
    .then(data => {

      this.eload= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Transaction Edited Successfully";


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

    this.globalservice.delNode(node.id,"tk2st-txns")
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Transaction Deleted Successfully";
        setTimeout(function () {
          alert("Transaction Deleted Successfully");
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
      dp2tk_txn_id: this.parentID,
      volume: this.num,
      volume_breakdown: '[]',
      station_id: this.statID
      };

      console.log(nodeObj);
    const that = this;


      // return;
    this.load = true;

    this.globalservice.newNode(nodeObj,"tk2st-txns")
    .then(data => {

      this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Transaction Created Successfully";
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

  open(content,node){
    // this.modalService.open(content, { size: 'lg' });

    this.parentID = node.dp2tk_txn_id;
    this.statID = node.station_id;

    console.log(this.parentID);

    this.parentVol = parseInt(node.volume_allocated);



    this.inputErr = "";
    this.inputSuccess = "";

    this.modalService.open(content, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  parentID;
  eparentID;

  statID;
  estatID;

  parentVol;
  eparentVol;


}
