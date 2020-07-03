import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../../global-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


class Node {
  id: string;
  oil_marketer: string;
  truck_id: string;
  volume: string;
}

class Node2 {
  // id: string;
  owner: string;
  volume_discharge: string;
  depot_name: string;
}


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-deptruckout',
  templateUrl: './deptruckout.component.html',
  styles: [
  ],
})
export class DeptruckoutComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  nodes: Node[];

  dtOptions2: DataTables.Settings = {};
  nodes2: Node2[];

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    public router:Router,
    public globalservice:GlobalServiceService
    ) {


      let trres = null;
      let statres = null;

      this.globalservice.search('trucks',this.searchTrTerm$)
      .subscribe(results => {
        trres = results;

        if(trres.data.trucks.data.length < 1){
          console.log(trres.data.trucks.data);

          this.searchTrTerm$.next('');

        }
        else{
          this.allTr = trres.data.trucks.data;

        }

        console.log(this.allTr);
      });

      this.globalservice.search('stations',this.searchStatTerm$)
      .subscribe(results => {
        statres = results;

        // this.allStat = statres.data.stations.data;

        if(statres.data.stations.data.length < 1){

          this.searchStatTerm$.next('');

        }
        else{
          this.allStat = statres.data.stations.data;

        }

        console.log(this.allStat);

      });


      this.globalservice.search('trucks',this.esearchTrTerm$)
      .subscribe(results => {
        trres = results;

         if(trres.data.trucks.data.length < 1){
          // console.log(trres.data.trucks.data);

          this.esearchTrTerm$.next('');

        }
        else{
          this.allTr = trres.data.trucks.data;

        }
        console.log(this.allTr);
      });

      this.globalservice.search('stations',this.esearchStatTerm$)
      .subscribe(results => {
        statres = results;
        if(statres.data.stations.data.length < 1){

          this.esearchStatTerm$.next('');

        }
        else{
          this.allStat = statres.data.stations.data;

        }
        // this.allStat = statres.data.stations.data;
        console.log(this.allStat);

      });



    }

    ph = [
      { id: 0, name: 'No Values Found. Try Again' }
    ];

  refresh(){
    window.location.reload();

    // this.ngOnInit();
    // this.router.navigate(['/usermgt/']);

  }

  jSON = JSON;




allStat: Object;
allTr: Object;

searchStatTerm$ = new Subject<string>();

searchTrTerm$ = new Subject<string>();

esearchStatTerm$ = new Subject<string>();
esearchTrTerm$ = new Subject<string>();




getAllNode(node){

    // this.globalservice.getAllEntityFilt(node,filt)
    this.globalservice.getAllEntity(node)
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){

        if(node=='trucks'){

          this.allTr = this.res.data.trucks.data;
        }

        if(node=='stations'){

          this.allStat = this.res.data.stations.data;
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


  owner = '';
  eowner = '';




  onItemSelect(item: any,nodekey) {
    console.log(item);

    if(nodekey == 'tr'){
      // this.mvd = item;
      this.truck = item.id;

    }

    if(nodekey == 'stat'){
      // this.depotd = item;
      this.stat = item.id;
      this.statname = item.name;

    console.log('stat');


    }




    if(nodekey == 'etr'){
      // this.mvd = item;
      this.etruck = item.id;

    }

    if(nodekey == 'estat'){
      // this.depotd = item;
      this.estat = item.id;
      this.estatname = item.name;


    }
  }


  onItemDeSelect(item: any,nodekey) {
    console.log(item);

    if(nodekey == 'tr'){
      // this.mvd = item;
      this.truck = "";

    }

    if(nodekey == 'stat'){
      // this.depotd = item;
      this.stat = "";
      this.statname = "";

    console.log('stat');


    }




    if(nodekey == 'etr'){
      // this.mvd = item;
      this.etruck = "";

    }

    if(nodekey == 'estat'){
      // this.depotd = item;
      this.estat = "";
      this.estatname = "";


    }
  }


  onFilterChange(item: any,nodekey) {
    console.log(item);


    if(nodekey == 'tr'){
      this.searchTrTerm$.next(item);
    }

    if(nodekey == 'stat'){
      this.searchStatTerm$.next(item);
    }


    if(nodekey == 'etr'){
      this.esearchTrTerm$.next(item);
    }

    if(nodekey == 'estat'){
      this.esearchStatTerm$.next(item);
    }


  }

  policy = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;


  ngOnInit(): void {
    const that = this;

    this.getAllNode("trucks");
    this.getAllNode("stations");

// =========================================
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

// this.depdropdownSettings = {
//   singleSelection: true,
//   idField: 'id',
//   textField: 'name',
//   selectAllText: 'Select All',
//   unSelectAllText: 'UnSelect All',
//   itemsShowLimit: 3,
//   allowSearchFilter: true,
//   clearSearchFilter: true
// };
// =========================================


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
            'https://app05.sahara-group.com/pjh-api/public/api/dt/dp2tk-txns',
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
      { data: 'oil_marketer' },
      { data: 'truck_id' },
      { data: 'volume' }]
    };


    // --------------------------------------------


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
            'https://app05.sahara-group.com/pjh-api/public/api/dt/depot-dv2dp-txn-views',
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
      { data: 'owner' },
      { data: 'volume_discharge' },
      { data: 'depot_name' }]
    };


  }




  // add new modal
  closeResult = '';

  dropdownSettings:IDropdownSettings = {};


  stat = '';
  statname = '';
  truck = '';

  statvol=0;

  statd = [];
  truckd = '';

  volBreak=[];
  statBreak =[];


  totvol=0


  estat = '';
  estatname = '';

  etruck = '';

  estatvol;

  estatd = [];
  etruckd = '';

  evolBreak=[];
  estatBreak =[];

  etotvol=0;


  addbtn = false;

  validateEditBtn(){

    let voter = 0;

    if(this.estat.length >= 2){
      voter++;
    }

    if(this.estatvol > 0){
      voter++;

    }



    if(voter < 2){
      return false;
    }
    else{
      return true;
    }


  }

  validateAddBtn(){

    let voter = 0;

    if(this.stat.length >= 2){
      voter++;
    }

    if(this.statvol > 0){
      voter++;

    }

    // console.log(this.stat);


    if(voter < 2){
      return false;
    }
    else{
      return true;
    }


  }




  removeBreak(ind, ed?){
    if(ed == 1){
      this.evolBreak.splice(ind, 1);
      this.estatBreak.splice(ind, 1);

    }
    else{
      this.volBreak.splice(ind, 1);
      this.statBreak.splice(ind, 1);

    }

  }


  addBreak(ed?){
    if(ed == 1){
      let breakObj = {

        station_id : this.estat,
        volume_allocated : this.estatvol
      }

      this.evolBreak.push(breakObj);
      this.estatBreak.push(this.estatname);
      this.estat = '';
      this.estatd = [];
      this.estatvol = null;

    }
    else{
      let breakObj = {
        station_id : this.stat,
        volume_allocated : this.statvol
      }

      this.volBreak.push(breakObj);
      this.statBreak.push(this.statname);

      this.stat = '';
      this.statd = [];
      this.statvol = null;
    }

  }





  res:any = null;
  load:any = false;
  eload:any = false;

  inputSuccess:any = "";
  inputErr:any = "";


  volSum(ed?){
    // console.log(this.volBreak.reduce((prev, cur) => prev + cur.volume, 0));
    if(ed == 1){
      return this.evolBreak.reduce((prev, cur) => prev + cur.volume_allocated, 0);
    }
    else{
      return this.volBreak.reduce((prev, cur) => prev + cur.volume_allocated, 0);
    }

  }





  validateNew(){
    let voter = 0;

    if(this.totvol > 0){
      voter++;

    }

    if(this.parentVol >= this.totvol){

      voter++;

    }


    if(this.volSum() == this.totvol){
      voter++;

    }

    if(this.owner.length > 0){
      voter++;

    }

    if(this.truck.length > 0){
      voter++;

    }



    // console.log(voter);
    // console.log(this.volSum());

    if(voter < 5){
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

    if(this.etotvol > 0){
      voter++;

    }

    // if(this.eparentVol >= this.etotvol){

    //   voter++;

    // }


    if(this.volSum(1) == this.etotvol){
      voter++;

    }

    if(this.eowner.length > 0){
      voter++;

    }

    if(this.etruck.length > 0){
      voter++;

    }

    // console.log(voter);

    if(voter < 4){
      this.inputErr = "Please Ensure All Fields Are Correctly Filled";

      return false;
    }
    else{
      this.inputErr = "";

      return true;
    }

  }

  edID = '';


  trEdName;

  parseNode(node){
    return node.truck ? node.truck.name : 'Not found';
  }



  editModal(edContent, node){

    this.inputErr = "";
    this.inputSuccess = "";

    let evolbr = JSON.parse(this.globalservice.decodeHtml(node.volume_breakdown));
    console.log(evolbr);
    this.eowner = node.oil_marketer;
    this.evolBreak = evolbr;
    this.etotvol = parseInt(node.volume);
    this.etruck = node.truck_id;
    this.trEdName = node.truck ? node.truck.name : 'Not found';


    this.eparentID = node.dv2dp_txn_id;

    this.eparentVol = parseInt(node.volume);


    console.log(this.eparentID);


    const that = this;

    this.evolBreak.forEach(function(part, index, theArray) {
      that.getByID(theArray[index].station_id, 'stations', index);

    });


    console.log(this.evolBreak);
    console.log(this.estatBreak);

    this.edID = node.id;

    console.log(node);
    this.modalService.open(edContent, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }





  getByID(id, node, ind?, i?) {

    const that = this;

    this.globalservice.getNodeByID(id, node)
    .then(data => {

      this.eload = false;
      console.log(data);

      this.res = data;

      if (this.res.status === 'success') {

        if (node === 'stations') {
          if (this.res.data.station) {


              this.estatBreak[ind] = this.res.data.station.name;

          } else {

              this.estatBreak[ind] = 'Not Found';

          }

        } else {
          return this.res.data[node].name ? this.res.data[node].name : 'Not Found'  ;
        }

      } else {
        this.inputErr = this.res.mesage;
      //   console.log("something failed in api", data);
      }

    },
    err => {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');
      this.eload = false;

    })
    .catch(err => {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');
      this.eload = false;

    })
    .finally(() => {
      this.eload = false;

    });


  }






  edit(){

    const that = this;

    console.log(this.edID);


    let nodeObj =  {
      dv2dp_txn_id: this.eparentID,
      oil_marketer: this.eowner,
      truck_id: this.etruck,
      volume: this.etotvol,

      volume_breakdown: JSON.stringify(this.evolBreak)
      };

      console.log(nodeObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.edID,nodeObj,'dp2tk-txns')
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


  scurl = '';
  escurl = '';

  del(node){

    let r=confirm('Confirm this operation. It cannot be undone');

    if(r==false){return false ;};

    console.log(node);

    this.globalservice.delNode(node.id,"dp2tk-txns")
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
      dv2dp_txn_id: this.parentID,

      oil_marketer: this.owner,
      truck_id: this.truck,
      volume: this.totvol,

      volume_breakdown: JSON.stringify(this.volBreak)
      };

      console.log(nodeObj);
    const that = this;


      // return;
    this.load = true;

    this.globalservice.newNode(nodeObj,'dp2tk-txns')
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

    this.parentID = node.dv2dp_txn_id;

    this.parentVol = parseInt(node.volume_discharge);


    console.log(this.parentID);


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

  parentVol;
  eparentVol;



}
