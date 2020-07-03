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
  capacity: string;
  product_id: string;
  plate_number: string;
  // parent: string;
}


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}


@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styles: [
  ],
})
export class TrucksComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  nodes: Node[];

  constructor(
    private http: HttpClient,
    public router:Router,
    public globalservice:GlobalServiceService,
    private modalService: NgbModal

    ) {


      let prodres = null;



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




    }

allProd: Object;


searchProdTerm$ = new Subject<string>();
esearchProdTerm$ = new Subject<string>();

prodd = [];
eprodd = [];

edprodplace:any;

dropdownSettings:IDropdownSettings = {};



onItemSelect(item: any,nodekey, inskey?) {
  console.log(item);

  if(nodekey == 'prod'){
    // this.depotd = item;
    this.prod = item.id;

  }


  if(nodekey == 'eprod'){
    // this.edepotd = item;
    this.eprod = item.id;

  }

}


onItemDeSelect(item: any,nodekey, inskey?) {
  console.log(item);

  if(nodekey == 'prod'){
    // this.depotd = item;
    this.prod = "";

  }


  if(nodekey == 'eprod'){
    // this.edepotd = item;
    this.eprod = "";

  }

}




onFilterChange(item: any,nodekey) {
  console.log(item);

  if(nodekey == 'prod'){
    this.searchProdTerm$.next(item);
  }

  if(nodekey == 'eprod'){
    this.esearchProdTerm$.next(item);
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


      if(node=='products'){

        this.allProd = this.res.data.products.data;
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




getByID(id, node) {

  const that = this;

  this.globalservice.getNodeByID(id, node)
  .then(data => {

    this.eload = false;
    console.log(data);

    this.res = data;

    if (this.res.status === 'success') {

      if (node === 'products') {
        if (this.res.data.product) {


            this.edprodplace = this.res.data.product.name;

        } else {

            this.edprodplace = 'Not Found';

        }

      }
      else {
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




  refresh(){
    window.location.reload();

    // this.ngOnInit();
    // this.router.navigate(['/usermgt/']);

  }

  jSON = JSON;




  policy = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;



  ngOnInit(): void {
    const that = this;


    this.getAllNode("products");

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      closeDropDownOnSelection: true,
      allowSearchFilter: true,
      clearSearchFilter: true
    };


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
            'https://app05.sahara-group.com/pjh-api/public/api/dt/trucks',
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
      { data: 'name' },
      { data: 'capacity' },
      { data: 'product_id' },
      { data: 'plate_number' }]
    };

  }



  // nodeParent(node){
  //   // return node.depot.name;
  //   return node.depot_id;
  //   // return "";
  // }

  nodeProd(node){
    // console.log(node);
    return node.product.name;
    // return node.product_id;

  }


  // add new modal
  closeResult = '';

  name = '';
  cap:number;
  prod='';
  plate='';

  ename = '';
  ecap:number;
  eprod='';
  eplate='';




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

    if(this.plate.length >= 2){
      voter++;

    }

    if(this.prod.length >= 2){
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

  validateEdit(){

    let voter = 0;

    if(this.ename.length >= 2){
      voter++;
    }



    if(this.ecap >= 1){
      voter++;

    }

    if(this.eplate.length >= 2){
      voter++;

    }


    if(this.eprod.length >= 2){
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

  editModal(edContent, node){

    this.inputErr = "";
    this.inputSuccess = "";


    this.ename = node.name;

    this.ecap = node.capacity;
    this.eplate = node.plate_number;
    this.eprod = node.product_id;

    this.getByID(node.product_id, 'products');


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
      capacity: this.ecap,
      product_id: this.eprod,
      plate_number: this.eplate,
      };

      console.log(nodeObj);

      // return;
    this.eload = true;


    this.globalservice.editNode(this.edID,nodeObj,'trucks')
    .then(data => {

      this.eload= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Truck Edited Successfully";


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

    this.globalservice.delNode(node.id,"trucks")
    .then(data => {

      // this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Truck Deleted Successfully";
        setTimeout(function () {
          alert("Truck Deleted Successfully");
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
      capacity: this.cap,
      plate_number: this.plate,
      product_id: this.prod,
      };

      console.log(nodeObj);
    const that = this;


      // return;
    this.load = true;

    this.globalservice.newNode(nodeObj,'trucks')
    .then(data => {

      this.load= false;
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){
        this.inputSuccess = "Truck Created Successfully";
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
