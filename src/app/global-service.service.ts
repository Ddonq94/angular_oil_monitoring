import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reject } from 'q';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

// import { delay, map } from 'rxjs/operators';


// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

import { delay, map, filter, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { INavData } from '@coreui/angular';


@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(
    private http: HttpClient,
    public router:Router
  ) { }

  private baseUrl = 'https://app05.sahara-group.com/pjh-api/public/api';



  getOS(){
    var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) { OSName="Windows 10"; }
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) { OSName="Windows 8"; }
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) { OSName="Windows 7"; }
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) { OSName="Windows Vista"; }
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) { OSName="Windows XP"; }
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) { OSName="Windows 2000"; }
if (window.navigator.userAgent.indexOf("Mac")            != -1) { OSName="Mac/iOS"; }
if (window.navigator.userAgent.indexOf("X11")            != -1) { OSName="UNIX"; }
if (window.navigator.userAgent.indexOf("Linux")          != -1) { OSName="Linux"; }

return OSName;

  }



  decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}


   httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json'
    })
  };


  head(){
    this.httpOptions.headers =
  this.httpOptions.headers.set('Authorization', `Bearer ${localStorage.getItem('sessionToken')}`);

  return this.httpOptions;
  }


  login(uname, pw){

    let param = {
      email: uname,
      password: pw,
      device_name: this.getOS()
    };

    console.log(param);


    // return new Promise(resolve => {
    //   this.http.post(`${this.baseUrl}/auth/token`,param).subscribe(res=>resolve(res));
    // })


    return this.http.post(`${this.baseUrl}/auth/token`, param)
        .toPromise()
        .then(res => {
            console.log(res);
            return res;
        });

  }


  unAuth(){
    console.log("Session Expired");
        this.router.navigate(['/']);
  }



// =======================================================================================


  newNode(param,node){
    console.log(param);
    console.log(this.head());

    return new Promise(resolve => {
      this.http.post(`${this.baseUrl}/${node}`, param, this.head())
      .subscribe(
      res=>{
        resolve(res);
      },
      err=> {
        console.log(err);
        if(err.error.message == "Unauthenticated"){
          this.unAuth();

        }
        else{
          alert('Something went wrong, Please Check Your Network or Contact Admin');

        }

      });

    });


  }


  getNodeByID(id,node){
    console.log(id);

    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/${node}/${id}`, this.head())
      .subscribe(
      res=>{
        resolve(res);
      },
      err=> {
        console.log(err);
        if(err.error.message == "Unauthenticated"){
          this.unAuth();

        }
        else{
          alert('Something went wrong, Please Check Your Network or Contact Admin');

        }

      });

    });


  }


  editNode(id,param,node){
    console.log(id);
    console.log(param);

    return new Promise(resolve => {
      this.http.put(`${this.baseUrl}/${node}/${id}`, param, this.head())
      .subscribe(
      res=>{
        resolve(res);
      },
      err=> {
        console.log(err);
        if(err.error.message == "Unauthenticated"){
          this.unAuth();

        }
        else{
          alert('Something went wrong, Please Check Your Network or Contact Admin');

        }

      });

    });


  }

  delNode(id,node){
    console.log(id);

    return new Promise(resolve => {
      this.http.delete(`${this.baseUrl}/${node}/${id}`, this.head())
      .subscribe(
      res=>{
        resolve(res);
      },
      err=> {
        console.log(err);
        if(err.error.message == "Unauthenticated"){
          this.unAuth();

        }
        else{
          alert('Something went wrong, Please Check Your Network or Contact Admin');

        }

      });

    });


  }

  getAllEntityFilt(node,filt){

    if(!filt){
      return null;
    }
    console.log(filt);


    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/${node}?filter=${filt}`, this.head())
      .subscribe(
      res=>{
        resolve(res);
        console.log(res);
      },
      err=> {
        console.log(err);
        if(err.error.message == "Unauthenticated"){
          this.unAuth();

        }
        else{
          alert('Something went wrong, Please Check Your Network or Contact Admin');

        }

      });

    });


  }

  getAllEntity(node,param?){
    let p;
    if(param){
      p = this.serialize(param);
    }

    console.log(p);

    if(node == 'dashboard'){


      return new Promise(resolve => {
        this.http.get(`${this.baseUrl}/${node}?${p}`, this.head())
        .subscribe(
        res=>{
          resolve(res);
          console.log(res);
        },
        err=> {
          console.log(err);
          if(err.error.message == "Unauthenticated"){
            this.unAuth();

          }
          else{
            alert('Something went wrong, Please Check Your Network or Contact Admin');

          }

        });

      });

    }
    else{

      return new Promise(resolve => {
        this.http.get(`${this.baseUrl}/${node}`, this.head())
        .subscribe(
        res=>{
          resolve(res);
          console.log(res);
        },
        err=> {
          console.log(err);
          if(err.error.message == "Unauthenticated"){
            this.unAuth();

          }
          else{
            alert('Something went wrong, Please Check Your Network or Contact Admin');

          }

        });

      });

    }

  }



  serialize(obj) {

    console.log(obj);
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
  }



  IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
    }else{
      return true;
    }
  }


  public projectName = 'Project H';

  public footerLeft = new Date().getFullYear()+' Asharami Synergy';

  public footerRight = 'Powered By Sahara Group';

  public sessionToken = '';

  public sessionData:any = null;


  public policy = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(JSON.parse(localStorage.getItem('sessionData')).user.roles.policy) : null;
  public fname = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(localStorage.getItem('sessionData')).user.first_name : 'Quick';
  public lname = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(localStorage.getItem('sessionData')).user.last_name : 'Links';
  public type = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(localStorage.getItem('sessionData')).user.type : 'N/A';


  sbaseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';

  search(node,terms: Observable<string>) {
    return terms.pipe(debounceTime(800)
      ,distinctUntilChanged())
      .pipe(switchMap(term => this.searchEntries(node,term)));
      // .subscribe(term => this.searchEntries(term));
  }


  searchEntries(node,term) {

    let query;

    if(node == "mother"){
      node = 'vessels';
     query = '{"where":[[["type","LIKE","%mother%"],["name","LIKE","%'+term+'%"]]]}';

    }
    else if (node == "daughter"){
      node = 'vessels';
      query = '{"where":[[["type","LIKE","%daughter%"],["name","LIKE","%'+term+'%"]]]}';

    }
    else{
      query = '{"where":[[["name","LIKE","%'+term+'%"]]]}';

    }

    console.log(query);
    console.log(node);

    let url =`${this.baseUrl}/${node}?filter=${query}`;
    console.log(url);

    return this.http
        .get(url, this.head())
        .pipe(map(res => res));
  }



  getNav(term: string = null): Observable<INavData[]> {
    let items = getAllNavs();
    if (term) {
        items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
}




}

function getAllNavs() {
  let navs = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW'
      // }
    },
    {
      title: true,
      name: 'Transactions'
    },
    {
      name: 'Trans. Mgt.',
      url: '/transmgt',
      icon: 'icon-basket',
      children: [
        {
          name: 'MV to DV',
          url: '/transmgt/mvtodv',
          icon: 'icon-basket'
        },
        {
          name: 'DV to Depot',
          url: '/transmgt/dvtodep',
          icon: 'icon-basket'
        },
        {
          name: 'Depot Truckout',
          url: '/transmgt/deptruckout',
          icon: 'icon-basket'
        },
        {
          name: 'Station Receipt',
          url: '/transmgt/statreceipt',
          icon: 'icon-basket'
        },


      ]
    },
    {
      title: true,
      name: 'Users'
    },
    {
      name: 'User. Mgt.',
      url: '/usermgt',
      icon: 'icon-user',
      children: [
        // {
        //   name: 'Regulatory Users',
        //   url: '/usermgt/regusermgt',
        //   icon: 'icon-user'
        // },
        // {
        //   name: 'Inspectors',
        //   url: '/usermgt/inspector',
        //   icon: 'icon-user'
        // },
        // {
        //   name: 'Station Users',
        //   url: '/usermgt/statusermgt',
        //   icon: 'icon-user'
        // },
        // {
        //   name: 'Depot Users',
        //   url: '/usermgt/depusermgt',
        //   icon: 'icon-user'
        // },



      ]
    },
    {
      title: true,
      name: 'Assets'
    },
    {
      name: 'Asset Mgt.',
      url: '/assetmgt',
      icon: 'icon-layers',
      children: [
        {
          name: 'Mother Vessels',
          url: '/assetmgt/mvmgt',
          icon: 'icon-layers'
        },
        {
          name: 'Daughter Vessels',
          url: '/assetmgt/dvmgt',
          icon: 'icon-layers'
        },
        {
          name: 'Depots',
          url: '/assetmgt/depotmgt',
          icon: 'icon-layers'
        },
        {
          name: 'Depot Tanks',
          url: '/assetmgt/dtankmgt',
          icon: 'icon-layers'
        },
        {
          name: 'Stations',
          url: '/assetmgt/statmgt',
          icon: 'icon-layers'
        },
        {
          name: 'Station Tanks',
          url: '/assetmgt/tankmgt',
          icon: 'icon-layers'
        },
        {
          name: 'Inspectors',
          url: '/assetmgt/inspectmgt',
          icon: 'icon-layers'
        },
        {
          name: 'Products',
          url: '/assetmgt/prodmgt',
          icon: 'icon-layers'
        },
        {
          name: 'Trucks',
          url: '/assetmgt/truckmgt',
          icon: 'icon-layers'
        },
        // {
        //   name: 'Devices',
        //   url: '/assetmgt/devicemgt',
        //   icon: 'icon-layers'
        // },

      ]
    },
    {
      title: true,
      name: 'Others'
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'icon-wrench',
      children: [
        {
          name: 'Role Mgt',
          url: '/settings/rolemgt',
          icon: 'icon-wrench'
        },

      ]
    },

    {
      name: 'Logout',
      url: '/',
      variant: 'danger',
      icon: 'icon-lock',

    }
  ];


// ======================================================
  function ret(){
    return;
  }

  if(localStorage.getItem('sessionToken') == ''){

  }
  else{


  // let roles = localStorage.getItem('sessionToken');
  let roles = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(localStorage.getItem('sessionData')).user.roles : ret();
  let type = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(localStorage.getItem('sessionData')).user.type : ret();





  let policy = JSON.parse(roles.policy);

  console.log(policy);
  console.log(navs);
  console.log(policy['mv2dv-txns'].read);

  let parentInd = findInd(navs,'Trans. Mgt.');


  if(policy['mv2dv-txns'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'MV to DV');
  console.log(ind);

    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['dv2dp-txns'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'DV to Depot');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['dp2tk-txns'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Depot Truckout');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['tk2st-txns'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Station Receipt');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }


  if(navs[parentInd]['children'].length < 1){

    navs.splice(parentInd, 1);
    navs.splice(parentInd - 1, 1);
  }


  // //users
  parentInd = findInd(navs,'User. Mgt.');


  // if(policy['users'].read != false && (type=='regulator' || type == 'admin') ){
  if(policy['users'].read != false  ){

    if( (type=='regulator' || type == 'admin') ){

      console.log(navs[parentInd]['children']);
    //   let ind = findInd(navs[parentInd]['children'],'Regulatory Users');
    // console.log(ind);

    //   if(typeof ind == 'number'){

    //     navs[parentInd]['children'].splice(ind, 1);
    //   }

        navs[parentInd]['children'].push(
          {
            name: 'Regulatory Users',
            url: '/usermgt/regusermgt',
            icon: 'icon-user'
          }
          );

      console.log(navs[parentInd]['children']);
    }
  }

  // if(policy['users'].read != false && (type=='inspector' || type == 'admin') ){

    if(policy['users'].read != false  ){

      if( (type=='inspector' || type == 'admin') ){
          console.log(navs[parentInd]['children']);

        navs[parentInd]['children'].push(
          {
            name: 'Inspectors',
            url: '/usermgt/inspector',
            icon: 'icon-user'
          }
          );

          console.log(navs[parentInd]['children']);
        }
  }


  // if(policy['users'].read != false && (type=='station' || type == 'admin') ){

    if(policy['users'].read != false  ){

      if( (type=='station' || type == 'admin') ){

          console.log(navs[parentInd]['children']);
        //   let ind = findInd(navs[parentInd]['children'],'Station Users');
        // console.log(ind);

        //   if(typeof ind == 'number'){

        //     navs[parentInd]['children'].splice(ind, 1);
        //   }

        navs[parentInd]['children'].push(
          {
            name: 'Station Users',
            url: '/usermgt/statusermgt',
            icon: 'icon-user'
          }
          );

          console.log(navs[parentInd]['children']);
        }
  }

  // if(policy['users'].read != false && (type=='depot' || type == 'admin') ){

    if(policy['users'].read != false  ){

      if( (type=='depot' || type == 'admin') ){

          console.log(navs[parentInd]['children']);
        //   let ind = findInd(navs[parentInd]['children'],'Depot Users');
        // console.log(ind);

        //   if(typeof ind == 'number'){

        //     navs[parentInd]['children'].splice(ind, 1);
        //   }

        navs[parentInd]['children'].push(
          {
            name: 'Depot Users',
            url: '/usermgt/depusermgt',
            icon: 'icon-user'
          }
          );

          console.log(navs[parentInd]['children']);
        }
  }



  if(navs[parentInd]['children'].length < 1){

    navs.splice(parentInd, 1);
    navs.splice(parentInd - 1, 1);
  }

  //assets
  parentInd = findInd(navs,'Asset Mgt.');


  if(policy['mother-vessels'].read == false){
  // if(policy['vessels'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Mother Vessels');
  console.log(ind);

    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['daughter-vessels'].read == false){
  // if(policy['vessels'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Daughter Vessels');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['depots'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Depots');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['depot-tanks'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Depot Tanks');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['stations'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Stations');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['stations-tanks'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Station Tanks');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['inspectors'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Inspectors');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['products'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Products');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['trucks'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Trucks');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }

  if(policy['devices'].read == false){

    console.log(navs[parentInd]['children']);
    let ind = findInd(navs[parentInd]['children'],'Devices');


    if(typeof ind == 'number'){

      navs[parentInd]['children'].splice(ind, 1);
    }

    console.log(navs[parentInd]['children']);
  }


  if(navs[parentInd]['children'].length < 1){

    navs.splice(parentInd, 1);
    navs.splice(parentInd - 1, 1);
  }



//settings
  parentInd = findInd(navs,'Settings');

  console.log('ind',parentInd);
  console.log('ty',type);
  if(type != "admin"){
    // if(policy['vessels'].read == false){

      console.log(navs[parentInd]['children']);
      let ind = findInd(navs[parentInd]['children'],'Role Mgt');
    console.log(ind);

      if(typeof ind == 'number'){

        navs[parentInd]['children'].splice(ind, 1);
      }

      console.log(navs[parentInd]['children']);
    }



    if(navs[parentInd]['children'].length < 1){

      navs.splice(parentInd, 1);
      navs.splice(parentInd - 1, 1);
    }



  }


  function findInd(array, val){
    return (array.findIndex((element) => element.name == val) != -1) ? array.findIndex((element) => element.name == val) : false ;
  }
// ================================================

  return navs;

}
