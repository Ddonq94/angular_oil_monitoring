import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbDate, NgbModule, NgbModal, ModalDismissReasons, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { GlobalServiceService } from '../../global-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subject } from 'rxjs';


class Node {
  id: string;
  mbl_volume: string;
  dbl_volume: string;
  volume_discharged: string;
}


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-mvtodv',
  templateUrl: './mvtodv.component.html',
  styles: [
  ]
})
export class MvtodvComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  nodes: Node[];

  constructor(
    private http: HttpClient,
    public router:Router,
    public globalservice:GlobalServiceService,
    private modalService: NgbModal,
    private parserFormatter: NgbDateParserFormatter
    ) {


      let prodres = null;
      let mvres = null;
      let dvres = null;
      let depres = null;
      let insres = null;
      this.globalservice.search('products',this.searchProdTerm$)
      .subscribe(results => {
        prodres = results;

        if(prodres.data.products.data.length < 1){

          this.searchProdTerm$.next('');

        }
        else{
          // this.allStat = statres.data.stations.data;

          this.allProd = prodres.data.products.data;
        }

        console.log(this.allProd);
        console.log(prodres);
      });

      this.globalservice.search('mother',this.searchMVTerm$)
      .subscribe(results => {
        mvres = results;

        if(mvres.data.vessels.data.length < 1){

          this.searchMVTerm$.next('');

        }
        else{

          this.allMv = mvres.data.vessels.data;
        }

        console.log(this.allMv);
      });

      this.globalservice.search('daughter',this.searchDVTerm$)
      .subscribe(results => {
        dvres = results;

        if(dvres.data.vessels.data.length < 1){

          this.searchDVTerm$.next('');

        }
        else{

          this.allDv = dvres.data.vessels.data;
        }

        console.log(this.allDv);
      });

      this.globalservice.search('depots',this.searchDepTerm$)
      .subscribe(results => {
        depres = results;

        if(depres.data.depots.data.length < 1){

          this.searchDepTerm$.next('');

        }
        else{

          this.allDep = depres.data.depots.data;
        }

        console.log(this.allDep);
      });

      this.globalservice.search('inspectors',this.searchInsTerm$)
      .subscribe(results => {
        insres = results;

        if(insres.data.inspectors.data.length < 1){

          this.searchInsTerm$.next('');

        }
        else{

          this.allIns = insres.data.inspectors.data;
        }
        console.log(this.allIns);
      });


      // edit
      this.globalservice.search('products',this.esearchProdTerm$)
      .subscribe(results => {
        prodres = results;

        if(prodres.data.products.data.length < 1){

          this.esearchProdTerm$.next('');

        }
        else{

          this.allProd = prodres.data.products.data;
        }

        console.log(this.allProd);
        console.log(prodres);
      });

      this.globalservice.search('mother',this.esearchMVTerm$)
      .subscribe(results => {
        mvres = results;

        if(mvres.data.vessels.data.length < 1){

          this.esearchMVTerm$.next('');

        }
        else{

          this.allMv = mvres.data.vessels.data;
        }

        console.log(this.allMv);
      });

      this.globalservice.search('daughter',this.esearchDVTerm$)
      .subscribe(results => {
        dvres = results;

        if(dvres.data.vessels.data.length < 1){

          this.esearchDVTerm$.next('');

        }
        else{

          this.allDv = dvres.data.vessels.data;
        }

        // this.allDv = dvres.data.vessels.data;
        console.log(this.allDv);
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


    }


  refresh(){
    window.location.reload();

    // this.ngOnInit();
    // this.router.navigate(['/usermgt/']);

  }

  jSON = JSON;

  maxdate = {year: new Date().getFullYear(), month: new Date().getMonth(), day: new Date().getDate()};



  parseMV(node){
    return node.mother_vessel ? node.mother_vessel.name + " (" + node.mbl_date + ")" : "Not Found";
  }

  parseDV(node) {
    return node.daughter_vessel ? node.daughter_vessel.name + " (" +node.dbl_date + ")" : "Not Found";

  }

  parseProd(node) {
    return node.product ? node.product.name : "Not Found";
  }




allMv: Object;
allDv: Object;
allProd: Object;
allDep: Object;

allIns: Object;
searchInsTerm$ = new Subject<string>();

searchProdTerm$ = new Subject<string>();
searchMVTerm$ = new Subject<string>();
searchDVTerm$ = new Subject<string>();
searchDepTerm$ = new Subject<string>();

esearchProdTerm$ = new Subject<string>();
esearchMVTerm$ = new Subject<string>();
esearchDVTerm$ = new Subject<string>();
esearchDepTerm$ = new Subject<string>();


  getAllIns(node) {


    // this.globalservice.getAllEntityFilt(node,filt)
    this.globalservice.getAllEntity(node)
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){

        this.allIns = this.res.data.inspectors.data;


      } else {
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

  getAllDep(node) {

    const query = {
      where: [
      {type: 'daugther', status: 'inactive'},
      ]
      };

      let filt = JSON.stringify(query);


    // this.globalservice.getAllEntityFilt(node,filt)
    this.globalservice.getAllEntity(node)
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){

        this.allDep = this.res.data.depots.data;


      } else {
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



  getAllProd(node, filter?) {

      // this.globalservice.getAllEntityFilt(node,filt)
      this.globalservice.getAllEntity(node)
      .then(data => {

        console.log('without filt');
        console.log(data);

        this.res = data;

        if(this.res.status == "success"){

          this.allProd = this.res.data.products.data;


        } else {
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


  getAllMV(node) {

    const query = {
      where: [[["type", "=", "mother"]]]
    };

      let filt = JSON.stringify(query);


    this.globalservice.getAllEntityFilt(node,filt)
    // this.globalservice.getAllEntity(node)
    .then(data => {

      // this.load= false;
      console.log('mvfilter');
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){

        this.allMv = this.res.data.vessels.data;


      } else {
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



  getAllDV(node) {

    const query = {
      where: [[["type", "=", "daughter"]]]
    };

      let filt = JSON.stringify(query);


    this.globalservice.getAllEntityFilt(node,filt)
    // this.globalservice.getAllEntity(node)
    .then(data => {

      console.log('dvfilter');
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){

        this.allDv = this.res.data.vessels.data;


      } else {
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



  onItemSelect(item: any,nodekey, inskey?) {
    console.log(item);
    if(nodekey == 'prod') {
      // this.prodd = item;
      this.prod = item.id;
    }
    if(nodekey == 'mv') {
      // this.mvd = item;
      this.mv = item.id;

    }
    if(nodekey == 'dv') {
      // this.dvd = item;
      this.dv = item.id;
    }
    if(nodekey == 'dep') {
      // this.depotd = item;
      this.depot = item.id;
      this.depname = item.name;


    }

    if(nodekey == 'ins') {
      // this.depotd = item;
      if(this.same ){

        if( inskey == 0){

          this.insEdName.length = 0;
          const that = this;

          this.ivolBreak.forEach(function(part, index, theArray) {
            theArray[index].inspector_id = item.id;
        that.getByID(theArray[index].inspector_id, 'inspectors',index);

          });
        }
        else{
          this.same = !this.same;
          this.ivolBreak[inskey].inspector_id = item.id;

        }

      } else {

        this.ivolBreak[inskey].inspector_id = item.id;
      }

        console.log(this.ivolBreak);

    }

    if(nodekey == 'eprod') {
      // this.eprodd = item;
      this.eprod = item.id;

    }
    if(nodekey == 'emv') {
      // this.emvd = item;
      this.emv = item.id;

    }
    if(nodekey == 'edv') {
      // this.edvd = item;
      this.edv = item.id;

    }
    if(nodekey == 'edep') {
      // this.edepotd = item;
      this.edepot = item.id;
      this.edepname = item.name;

    }
  }


  onItemDeSelect(item: any,nodekey, inskey?) {
    console.log(item);
    if(nodekey == 'prod') {
      // this.prodd = item;
      this.prod = '';
    }
    if(nodekey == 'mv') {
      // this.mvd = item;
      this.mv = '';

    }
    if(nodekey == 'dv') {
      // this.dvd = item;
      this.dv = '';
    }
    if(nodekey == 'dep') {
      // this.depotd = item;
      this.depot = '';
      this.depname = '';


    }

    // if(nodekey == 'ins') {
    //   // this.depotd = item;
    //   if(this.same ){

    //     if( inskey == 0){

    //       this.insEdName.length = 0;
    //       const that = this;

    //       this.ivolBreak.forEach(function(part, index, theArray) {
    //         theArray[index].inspector_id = item.id;
    //     that.getByID(theArray[index].inspector_id, 'inspectors',index);

    //       });
    //     }
    //     else{
    //       this.same = !this.same;
    //       this.ivolBreak[inskey].inspector_id = item.id;

    //     }

    //   } else {

    //     this.ivolBreak[inskey].inspector_id = item.id;
    //   }

    //     console.log(this.ivolBreak);

    // }

    if(nodekey == 'eprod') {
      // this.eprodd = item;
      this.eprod = '';

    }
    if(nodekey == 'emv') {
      // this.emvd = item;
      this.emv = '';

    }
    if(nodekey == 'edv') {
      // this.edvd = item;
      this.edv = '';

    }
    if(nodekey == 'edep') {
      // this.edepotd = item;
      this.edepot = '';
      this.edepname = '';

    }
  }


  onFilterChange(item: any,nodekey) {
    console.log(item);

    if(nodekey == 'prod') {
      this.searchProdTerm$.next(item);
    }
    if(nodekey == 'mv') {
      this.searchMVTerm$.next(item);
    }
    if(nodekey == 'dv') {
      this.searchDVTerm$.next(item);
    }
    if(nodekey == 'dep') {
      this.searchDepTerm$.next(item);
    }

    if(nodekey === 'ins') {
      this.searchInsTerm$.next(item);
    }

    if(nodekey == 'eprod') {
      this.esearchProdTerm$.next(item);
    }
    if(nodekey == 'emv') {
      this.esearchMVTerm$.next(item);
    }
    if(nodekey == 'edv') {
      this.esearchDVTerm$.next(item);
    }
    if(nodekey == 'edep') {
      this.esearchDepTerm$.next(item);
    }


  }

  policy = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;


  ngOnInit(): void {
    const that = this;

    this.getAllMV("vessels");
    this.getAllDV("vessels");
    this.getAllProd("products");
    this.getAllDep("depots");
    this.getAllIns("inspectors");

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
            'https://app05.sahara-group.com/pjh-api/public/api/dt/mv2dv-txns',
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
      { data: 'mbl_volume' },
      { data: 'dbl_volume' },
      { data: 'volume_discharged' },
      { data: 'volume_breakdown' },
      { data: 'mbl_date' },
      { data: 'dbl_date' }]
    };

  }




  // add new modal
  closeResult = '';

  dropdownSettings:IDropdownSettings = {};

  mvbldMod:NgbDateStruct;
  dvbldMod:NgbDateStruct;

  mv = '';
  dv = '';
  prod='';
  depot = '';
  depname = '';

  mvd = '';
  dvd = '';
  prodd='';
  depotd = [];

  emvd = '';
  edvd = '';
  eprodd='';
  edepotd = [];


  mvbld = '';
  dvbld = '';

  mvbldv = 0;
  dvbldv = 0;
  voldis = 0;


  own = '';
  depvol= 0;

  volBreak=[];
  depBreak=[];


  emv = '';
  edv = '';

  emvbldMod:NgbDateStruct;
  edvbldMod:NgbDateStruct;

  emvbld = '';
  edvbld = '';

  emvbldv = 0;
  edvbldv = 0;
  evoldis = 0;

  eprod='';

  eown = '';
  edepot = '';
  edepname = '';
  edepvol = 0;

  evolBreak=[];
  edepBreak =[];



  addbtn = false;

  validateEditBtn() {

    let voter = 0;

    if(this.edepot.length >= 2) {
      voter++;
    }

    if(this.eown.length >= 2) {
      voter++;

    }

    if(this.edepvol > 0) {
      voter++;

    }


    if(voter < 3) {
      return false;
    } else {
      return true;
    }


  }

  validateAddBtn() {

    let voter = 0;

    if(this.depot.length >= 2) {
      voter++;
    }

    if(this.own.length >= 2) {
      voter++;

    }

    if(this.depvol > 0) {
      voter++;

    }


    if(voter < 3) {
      return false;
    } else {
      return true;
    }


  }

  nameById(id) {
    // if(this.allDep.length > 0){
      // return this.allDep.find(o => o.id === id).name;
      return id;
    // }
    // console.log(this.allDep);
    // return ""

  }

  removeBreak(ind, ed?) {
    if(ed == 1) {
      this.evolBreak.splice(ind, 1);
      this.edepBreak.splice(ind, 1);
    } else {
      this.volBreak.splice(ind, 1);
      this.depBreak.splice(ind, 1);
    }

  }

  addBreak(ed?) {
    if(ed == 1) {
      const breakObj = {
        depot_id : this.edepot,
        owner : this.eown,
        volume : this.edepvol,
        inspector_id : ''
      };

      this.evolBreak.push(breakObj);
      this.edepBreak.push(this.edepname);

      this.eown = '';
      this.edepot = '';
      this.edepotd = [];
      this.edepvol = null;
    } else {
      const breakObj = {
        depot_id : this.depot,
        owner : this.own,
        volume : this.depvol,
        inspector_id : ''
      }

      this.volBreak.push(breakObj);
      this.depBreak.push(this.depname);
      this.own = '';
      this.depot = '';
      this.depotd = [];
      this.depvol = null;
    }

  }





  res:any = null;
  load:any = false;
  eload:any = false;

  inputSuccess:any = '';
  inputErr:any = '';


  volSum(ed?) {
    // console.log(this.volBreak.reduce((prev, cur) => prev + cur.volume, 0));
    if(ed == 1) {
      return this.evolBreak.reduce((prev, cur) => prev + cur.volume, 0);
    } else {
      return this.volBreak.reduce((prev, cur) => prev + cur.volume, 0);
    }

  }


  validateIns() {

    let voter = 0;
    this.ivolBreak.forEach(function(part, index, theArray) {

      // theArray[index].inspector_id = this.ivolBreak[0].inspector_id;
      if(theArray[index].inspector_id == '') {
        // return false;
      } else {
      voter++;
      }

    });

    // // console.log(voter);
    if(voter < this.ivolBreak.length) {
      return false;
    } else {
      return true;
    }

  }




  validateNew() {
    let voter = 0;

    this.mvbld = this.parserFormatter.format(this.mvbldMod);
    this.dvbld = this.parserFormatter.format(this.dvbldMod);

    if(this.mv.length >= 2) {
      voter++;
    }

    if(this.dv.length >= 2) {
      voter++;
    }

    if(this.mvbld.length >= 2) {
      voter++;

    }

    if(this.dvbld.length >= 2) {
      voter++;

    }

    if(this.mvbldv > 0) {
      voter++;

    }

    if(this.dvbldv > 0) {
      voter++;

    }

    if(this.voldis > 0) {
      voter++;

    }

    if(this.prod.length >= 2) {
      voter++;

    }


    if(new Date(this.dvbld) >= new Date(this.mvbld)) {
      voter++;

      this.valdate = true;


    }else{

      this.valdate = false;
    }

    if(this.mvbldv >= this.dvbldv) {
      voter++;

    }

    if(this.dvbldv >= this.voldis) {
      voter++;

    }


    if(this.volSum() == this.voldis) {
      voter++;

    }




    // console.log(voter);
    if(voter < 12) {
      this.inputErr = 'Please Ensure All Fields Are Correctly Filled';

      return false;
    } else {
      this.inputErr = '';

      return true;
    }

  }


  onDateSelected(val) {
    if(val=='em') {
      this.emvbld = this.parserFormatter.format(this.emvbldMod);

    }

    if(val =='ed') {
      this.edvbld = this.parserFormatter.format(this.edvbldMod);

    }

  }


  valdate= false;
  evaldate= false;

  validateEdit() {

    let voter = 0;


    if(this.emv.length >= 2) {
      voter++;
    }

    if(this.edv.length >= 2) {
      voter++;
    }

    if(this.emvbld.length >= 2) {
      voter++;

    }

    if(this.edvbld.length >= 2) {
      voter++;

    }

    if(this.emvbldv > 0) {
      voter++;

    }

    if(this.edvbldv > 0) {
      voter++;

    }

    if(this.evoldis > 0) {
      voter++;

    }

    if(this.eprod.length >= 2) {
      voter++;

    }



    if(new Date(this.edvbld) >= new Date(this.emvbld)) {
      voter++;

      this.evaldate = true;

    }
    else{

      this.evaldate = false;
    }

    if(this.emvbldv >= this.edvbldv) {
      voter++;

    }

    if(this.edvbldv >= this.evoldis) {
      voter++;

    }


    if(this.volSum(1) == this.evoldis) {
      voter++;

    }

    // console.log(voter);
    if(voter < 12) {
      this.inputErr = 'Please Ensure All Fields Are Correctly Filled';

      return false;
    } else {
      this.inputErr = '';

      return true;
    }

  }

  edID = '';
  insID = '';

  mvEdName;
  dvEdName;
  prodEdName;

  insEdName = [];

  ivolBreak = [];
  idepBreak=[];


  same =false;

  insMod =[];


  eddvEd: NgbDateStruct;
  edmvEd: NgbDateStruct;

  handleSameIns() {
    // console.log(this.same);

    this.same = !this.same;
    if (this.same) {

    this.insEdName.length = 0;
    const that = this;


      this.ivolBreak.forEach(function(part, index, theArray) {
        theArray[index].inspector_id = theArray[0].inspector_id;
        that.getByID(theArray[index].inspector_id, 'inspectors',index);

      });

      console.log(this.ivolBreak);
    }

    // console.log(this.same);

  }



  insModal(insContent, node) {

    this.inputErr = '';
    this.inputSuccess = '';

    const evolbr = JSON.parse(this.globalservice.decodeHtml(node.volume_breakdown));

    this.ivolBreak = evolbr;

    this.insID = node.id;

    // this.insEdName =

    const that = this;

    this.insEdName.length = 0;

    this.ivolBreak.forEach(function(part, index, theArray) {

      if (theArray[index].inspector_id) {

        that.getByID(theArray[index].inspector_id, 'inspectors', index);
      }

      that.getByID(theArray[index].depot_id, 'depots', index, 1);

    });

    console.log(this.insEdName);



    console.log(node);
    this.modalService.open(insContent, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  editModal(edContent, node) {

    this.inputErr = '';
    this.inputSuccess = '';


    this.mvEdName = this.globalservice.decodeHtml(node.mother_vessel.name);
    this.dvEdName = this.globalservice.decodeHtml(node.daughter_vessel.name);
    this.prodEdName = this.globalservice.decodeHtml(node.product.name);


    const evolbr = JSON.parse(this.globalservice.decodeHtml(node.volume_breakdown));

    // console.log(evolbr);

    // edmv.navigateTo({year: 2013, month: 2})
    // let splitDate = node.mbl_date.substring(0, 10).split("-");
    // this.edmvEd = {'year':parseInt(splitDate[0]),'month':parseInt(splitDate[1]),'day':parseInt(splitDate[2])};
    this.edmvEd = node.mbl_date.substring(0, 10);
    console.log(this.edmvEd);
    //  splitDate = node.dbl_date.substring(0, 10).split("-");
     this.eddvEd = node.dbl_date.substring(0, 10);
     console.log(this.eddvEd);

    this.eprod = node.product_id;
    this.emv = node.mother_vessel_id;
    this.edv = node.daughter_vessel_id;
    this.emvbld = node.mbl_date;
    this.edvbld = node.dbl_date;
    this.emvbldv = node.mbl_volume;
    this.edvbldv = node.dbl_volume;
    this.evoldis = node.volume_discharged;
    this.evolBreak = evolbr;

    const that = this;

    this.evolBreak.forEach(function(part, index, theArray) {
      // that.edepBreak[index] = that.getByID(theArray[index].depot_id, 'depots');
      that.getByID(theArray[index].depot_id, 'depots', index);

    });


    console.log(this.evolBreak);
    console.log(this.edepBreak);


    this.edID = node.id;

    console.log(node);
    this.modalService.open(edContent, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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


        if (node === 'inspectors') {
          if (this.res.data.inspector) {

            this.insEdName[ind] = this.res.data.inspector.name;
          } else {
            this.insEdName[ind] = 'Not Found';

          }
        }

        else if (node === 'depots') {
          if (this.res.data.depot) {
            if (i) {

              this.idepBreak[ind] = this.res.data.depot.name;
            } else {

              this.edepBreak[ind] = this.res.data.depot.name;
            }
          } else {
            if (i) {
              this.idepBreak[ind] = 'Not Found';

            } else {

              this.edepBreak[ind] = 'Not Found';
            }

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


  edit() {

    const that = this;

    console.log(this.edID);


    const nodeObj =  {
      product_id: this.eprod,
      mother_vessel_id: this.emv,
      daughter_vessel_id: this.edv,
      mbl_date: this.emvbld,
      dbl_date: this.edvbld,
      mbl_volume: this.emvbldv,
      dbl_volume: this.edvbldv,
      volume_discharged: this.evoldis,
      subsidy: 0,
      volume_breakdown: JSON.stringify(this.evolBreak)
      };

      console.log(nodeObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.edID, nodeObj, 'mv2dv-txns')
    .then(data => {

      this.eload = false;
      console.log(data);

      this.res = data;

      if (this.res.status === 'success') {
        this.inputSuccess = 'Transaction Edited Successfully';


          setTimeout(function () {
            that.modalService.dismissAll();

            window.location.reload();

          }, 1000);
          //   this.globalservice.sessionToken = this.res.data.token;

      //   this.router.navigate(['/usermgt/']);
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


  saveIns() {

    const that = this;

    console.log(this.edID);


    const nodeObj =  {
      volume_breakdown: JSON.stringify(this.ivolBreak)
      };

      console.log(nodeObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.insID, nodeObj, 'mv2dv-txns')
    .then(data => {

      this.eload = false;
      console.log(data);

      this.res = data;

      if (this.res.status === 'success') {
        this.inputSuccess = 'Transaction Edited Successfully';


          setTimeout(function () {
            that.modalService.dismissAll();

            window.location.reload();

          }, 1000);
          //   this.globalservice.sessionToken = this.res.data.token;

      //   this.router.navigate(['/usermgt/']);
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


  del(node) {

    console.log(node);

    this.globalservice.delNode(node.id, 'mv2dv-txns')
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if (this.res.status === 'success') {
        this.inputSuccess = 'Transaction Deleted Successfully';
        setTimeout(function () {
          alert('Transaction Deleted Successfully');
          window.location.reload();

      }, 1000);


      } else {
        alert('Something Failed');
      //   console.log("something failed in api", data);
      }

    },
    err => {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');


    })
    .catch(err => {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');


    })
    .finally(() => {
      // this.eload= false;

    });

  }



  saveNew() {

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



    const nodeObj =  {
      product_id: this.prod,
      mother_vessel_id: this.mv,
      daughter_vessel_id: this.dv,
      mbl_date: this.mvbld,
      dbl_date: this.dvbld,
      mbl_volume: this.mvbldv,
      dbl_volume: this.dvbldv,
      volume_discharged: this.voldis,
      subsidy: 0,
      volume_breakdown: JSON.stringify(this.volBreak)
      };

      console.log(nodeObj);
    const that = this;


      // return;
    this.load = true;

    this.globalservice.newNode(nodeObj, 'mv2dv-txns')
    .then(data => {

      this.load = false;
      console.log(data);

      this.res = data;

      if (this.res.status === 'success') {
        this.inputSuccess = 'Transaction Created Successfully';
        setTimeout(function () {
        that.modalService.dismissAll();

        window.location.reload();

      }, 1000);
      //   this.globalservice.sessionToken = this.res.data.token;

      //   this.router.navigate(['/usermgt/']);
      } else {
        this.inputErr = this.res.mesage;
      //   console.log("something failed in api", data);
      }

    },
    err => {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');
      this.load = false;

    })
    .catch(err => {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');
      this.load = false;

    })
    .finally(() => {
      this.load = false;

    });

  }

  open(content) {
    // this.modalService.open(content, { size: 'lg' });

    this.inputErr = '';
    this.inputSuccess = '';

    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



}
