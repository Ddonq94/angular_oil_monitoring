import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../../global-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


class Node {
  id: string;
  mv2dv_txn_id: string;
  volume_discharged: string;
  shore_cert_url: string;
}

class Node2 {
  // id: string;
  mbl_date: string;
  dbl_date: string;
  m_name: string;
  d_name: string;
  volume: string;
  owner: string;
  inspector_name: string;
  mv2dv_txn_id: string;
}


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}




@Component({
  selector: 'app-dvtodep',
  templateUrl: './dvtodep.component.html',
  styles: [
  ],
})
export class DvtodepComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtOptions2: DataTables.Settings = {};

  nodes: Node[];
  nodes2: Node2[];

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    public router:Router,
    public globalservice:GlobalServiceService
    ) {


      let depres = null;
      let mvdvres = null;

      this.globalservice.search('depots',this.searchDepTerm$)
      .subscribe(results => {
        depres = results;

        if(depres.data.depots.data.length < 1){

          this.searchDepTerm$.next('');

        }
        else{
          this.allDep = depres.data.depots.data;

        }
        // this.allDep = depres.data.depots.data;
        console.log(this.allDep);
      });

      this.globalservice.search('mv2dv-txns',this.searchMVDVTerm$)
      .subscribe(results => {
        mvdvres = results;

        if(mvdvres.data.mv2dvTxns.data.length < 1){

          this.searchMVDVTerm$.next('');

        }
        else{
          // this.allStat = statres.data.stations.data;

          this.allMvDv = mvdvres.data.mv2dvTxns.data;
        }
        console.log(this.allDep);
      });

      this.globalservice.search('depots',this.esearchDepTerm$)
      .subscribe(results => {
        depres = results;

        if(depres.data.depots.data.length < 1){

          this.esearchDepTerm$.next('');

        }
        else{
          this.allDep = depres.data.depots.data;

        }

        // this.allDep = depres.data.depots.data;
        console.log(this.allDep);
      });

      this.globalservice.search('mv2dv-txns',this.esearchMVDVTerm$)
      .subscribe(results => {
        mvdvres = results;

        if(mvdvres.data.mv2dvTxns.data.length < 1){

          this.esearchMVDVTerm$.next('');

        }
        else{
          // this.allStat = statres.data.stations.data;

          this.allMvDv = mvdvres.data.mv2dvTxns.data;
        }

        // this.allMvDv = mvdvres.data.mv2dvTxns.data;
        console.log(this.allDep);
      });




    }


  refresh(){
    window.location.reload();

    // this.ngOnInit();
    // this.router.navigate(['/usermgt/']);

  }

  jSON = JSON;



  parseMV(node){
    return node.m_name + " (" +node.mbl_date + ")";
  }

  parseDV(node){
    return node.d_name + " (" +node.dbl_date + ")";

  }

  getInspector(node){
    return node.inspector_name;
  }




allMvDv: Object;
allDep: Object;

searchMVDVTerm$ = new Subject<string>();

searchDepTerm$ = new Subject<string>();

esearchMVDVTerm$ = new Subject<string>();
esearchDepTerm$ = new Subject<string>();




getAllNode(node){

    // this.globalservice.getAllEntityFilt(node,filt)
    this.globalservice.getAllEntity(node)
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){

        if(node=='depots'){

          this.allDep = this.res.data.depots.data;
        }

        if(node=='mv2dv-txns'){

          this.allMvDv = this.res.data.mv2dvTxns.data;
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


  mvdv = '';
  emvdv = '';




  onItemSelect(item: any,nodekey, inskey?) {
    console.log(item);

    if(nodekey == 'mvdv'){
      // this.mvd = item;
      this.mvdv = item.id;

    }

    if(nodekey == 'dep'){
      // this.depotd = item;
      this.depot = item.id;
      this.depname = item.name;

    }




    if(nodekey == 'emvdv'){
      // this.emvd = item;
      this.emvdv = item.id;

    }

    if(nodekey == 'edep'){
      // this.edepotd = item;
      this.edepot = item.id;
      this.edepname = item.name;

    }
  }



  onItemDeSelect(item: any,nodekey, inskey?) {
    console.log(item);

    if(nodekey == 'mvdv'){
      // this.mvd = item;
      this.mvdv = "";

    }

    if(nodekey == 'dep'){
      // this.depotd = item;
      this.depot = "";
      this.depname = "";

    }




    if(nodekey == 'emvdv'){
      // this.emvd = item;
      this.emvdv = "";

    }

    if(nodekey == 'edep'){
      // this.edepotd = item;
      this.edepot = "";
      this.edepname = "";

    }
  }




  onFilterChange(item: any,nodekey) {
    console.log(item);


    if(nodekey == 'mvdv'){
      this.searchMVDVTerm$.next(item);
    }

    if(nodekey == 'dep'){
      this.searchDepTerm$.next(item);
    }


    if(nodekey == 'emvdv'){
      this.esearchMVDVTerm$.next(item);
    }

    if(nodekey == 'edep'){
      this.esearchDepTerm$.next(item);
    }


  }

  policy = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;


  ngOnInit(): void {
    const that = this;

    this.getAllNode("depots");
    this.getAllNode("mv2dv-txns");

// =========================================
this.dropdownSettings = {
  singleSelection: true,
  idField: 'id',
  textField: 'mbl_date',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
      closeDropDownOnSelection: true,
      itemsShowLimit: 3,
  allowSearchFilter: true,
  clearSearchFilter: true
};

this.depdropdownSettings = {
  singleSelection: true,
  idField: 'id',
  textField: 'name',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 3,
  allowSearchFilter: true,
  clearSearchFilter: true
};
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
            'https://app05.sahara-group.com/pjh-api/public/api/dt/dv2dp-txns',
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
      { data: 'mv2dv_txn_id' },
      { data: 'volume_discharged' },
      { data: 'shore_cert_url' }]
    };




    // -------------------------------------------------------------------------


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
            'https://app05.sahara-group.com/pjh-api/public/api/dt/inspector-mv2dv-txn-views',
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

            console.log('parent');
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
      { data: 'mbl_date' },
      { data: 'dbl_date' },
      { data: 'm_name' },
      { data: 'd_name' },
      { data: 'volume' },
      { data: 'owner' },
      // { data: 'inspector_name' },
      // { data: 'mv2dv_txn_id' }

    ]

    };
    console.log('parentdone');



  }




  // add new modal
  closeResult = '';

  dropdownSettings:IDropdownSettings = {};
  depdropdownSettings:IDropdownSettings = {};



  depot = '';
  depname = '';

  depvol = 0;
  volbef = 0;
  volaft = 0;

  mvdvd = '';
  depotd = [];


  emvdvd = '';
  edepotd = [];

  voldis = 0;

  volBreak=[];
  depBreak =[];



  evoldis = 0;

  edepot = '';
  edepname = '';

  edepvol = 0;
  evolbef = 0;
  evolaft = 0;

  evolBreak=[];
  edepBreak =[];



  addbtn = false;

  validateEditBtn(){

    let voter = 0;

    if(this.edepot.length >= 2){
      voter++;
    }

    if(this.evolbef > 0){
      voter++;

    }

    if(this.evolaft > 0){
      voter++;

    }

    if(this.edepvol > 0){
      voter++;

    }

    if((this.evolbef+this.edepvol) == this.evolaft ){
      voter++;

    }


    if(voter < 5){
      return false;
    }
    else{
      return true;
    }


  }

  validateAddBtn(){

    let voter = 0;

    if(this.depot.length >= 2){
      voter++;
    }

    if(this.volbef > 0){
      voter++;

    }

    if(this.volaft > 0){
      voter++;

    }

    if(this.depvol > 0){
      voter++;

    }


    if((this.volbef + this.depvol) == this.volaft ){
      voter++;

    }



    if(voter < 5){
      return false;
    }
    else{
      return true;
    }


  }

  nameById(id){
    // if(this.allDep.length > 0){
      // return this.allDep.find(o => o.id === id).name;
      return id;
    // }
    // console.log(this.allDep);
    // return ""

  }


  removeBreak(ind, ed?){
    if(ed == 1){
      this.evolBreak.splice(ind, 1);
      this.edepBreak.splice(ind, 1);

    }
    else{
      this.volBreak.splice(ind, 1);
      this.depBreak.splice(ind, 1);

    }

  }


  addBreak(ed?){
    if(ed == 1){
      let breakObj = {
        depot_id : this.edepot,
        volume_discharge : this.edepvol,
        volume_before_discharge : this.evolbef,
        volume_after_discharge : this.evolaft
      }

      this.evolBreak.push(breakObj);
      this.edepBreak.push(this.edepname);

      this.evolbef = null;
      this.evolaft = null;
      this.edepot = '';
      this.edepotd = [];
      this.edepvol = null;
    }
    else{
      let breakObj = {
        depot_id : this.depot,
        volume_discharge : this.depvol,
        volume_before_discharge : this.volbef,
        volume_after_discharge : this.volaft
      }

      this.volBreak.push(breakObj);
      this.depBreak.push(this.depname);

      this.volbef = null;
      this.volaft = null;
      this.depot = '';
      this.depotd = [];
      this.depvol = null;
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
      return this.evolBreak.reduce((prev, cur) => prev + cur.volume_discharge, 0);
    }
    else{
      return this.volBreak.reduce((prev, cur) => prev + cur.volume_discharge, 0);
    }

  }


processFile(ev,ed?){
console.log(ev);

const that = this;

let file = ev.files[0];

let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
    if(ed){

     that.escurl = reader.result as string;
    }
    else{
      that.scurl = reader.result as string;

    }
    console.log(reader.result);

   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };

}


  validateNew(){
    let voter = 0;

    if(this.voldis > 0){
      voter++;

    }

    if(this.parentVol >= this.voldis){

      voter++;

    }


    if(this.volSum() == this.voldis){
      voter++;

    }

    if(this.scurl.length > 0){
      voter++;

    }

    if(this.parentID.length > 0){
      voter++;

    }

    if(this.owner.length > 0){
      voter++;

    }



    // console.log(voter);
    // console.log(this.volSum());

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

    if(this.evoldis > 0){
      voter++;

    }

    // if(this.eparentVol >= this.evoldis){

    //   voter++;

    // }


    if(this.volSum(1) == this.evoldis){
      voter++;

    }

    // if(this.escurl.length > 0){
    //   voter++;

    // }

    if(this.eparentID.length > 0){
      voter++;

    }

    if(this.eowner.length > 0){
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


  mvdvEdName;



  editModal(edContent, node){

    this.inputErr = "";
    this.inputSuccess = "";


    let evolbr = JSON.parse(this.globalservice.decodeHtml(node.volume_breakdown));
console.log(evolbr);
    this.evoldis = node.volume_discharged;
    this.escurl = node.shore_cert_url;
    this.mvdvEdName = node.mv2dv_txn.mbl_date;

    this.evolBreak = evolbr;


    const that = this;

    this.evolBreak.forEach(function(part, index, theArray) {
      // that.edepBreak[index] = that.getByID(theArray[index].depot_id, 'depots');
      that.getByID(theArray[index].depot_id, 'depots', index);

    });


    console.log(this.evolBreak);
    console.log(this.edepBreak);


    this.edID = node.id;
    this.eparentID = node.mv2dv_txn_id;
    this.eowner = node.owner;
    this.eparentVol = parseInt(node.mv2dv_txn.volume);


    console.log(this.eparentID);
    console.log(this.eowner);


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

        if (node === 'depots') {
          if (this.res.data.depot) {


              this.edepBreak[ind] = this.res.data.depot.name;

          } else {

              this.edepBreak[ind] = 'Not Found';

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
      mv2dv_txn_id: this.eparentID,
      owner: this.eowner,
      volume_discharged: this.evoldis,
      // shore_cert_url: this.escurl,
      volume_breakdown: JSON.stringify(this.evolBreak)
      };

      console.log(nodeObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.edID,nodeObj,'dv2dp-txns')
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

    this.globalservice.delNode(node.id,"dv2dp-txns")
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
      mv2dv_txn_id: this.parentID,
      owner: this.owner,
      // mv2dv_txn_id: this.mvdv,
      volume_discharged: this.voldis,
      shore_cert_url: this.scurl,
      volume_breakdown: JSON.stringify(this.volBreak)
      };

      console.log(nodeObj);
    const that = this;


      // return;
    this.load = true;

    this.globalservice.newNode(nodeObj,'dv2dp-txns')
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

    this.parentID = node.mv2dv_txn_id;
    this.owner = node.owner;
    this.parentVol = parseInt(node.volume);

    console.log(this.parentID);
    console.log(this.owner);
    console.log(node);

    this.inputErr = "";
    this.inputSuccess = "";

    this.modalService.open(content, {size: 'lg',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  parentVol;
  eparentVol;


  parentID;
  eparentID;

  owner;
  eowner;



}
