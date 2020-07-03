import { INavData } from '@coreui/angular';
import { GlobalServiceService } from './global-service.service';

console.log(GlobalServiceService);

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
      {
        name: 'Devices',
        url: '/assetmgt/devicemgt',
        icon: 'icon-layers'
      },

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


if(policy['users'].read != false && type=='regulator' ){

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

if(policy['users'].read != false && type=='inspector' ){

  console.log(navs[parentInd]['children']);
//   let ind = findInd(navs[parentInd]['children'],'Inspectors');
// console.log(ind);

//   if(typeof ind == 'number'){

//     navs[parentInd]['children'].splice(ind, 1);
//   }
navs[parentInd]['children'].push(
  {
    name: 'Inspectors',
    url: '/usermgt/inspector',
    icon: 'icon-user'
  }
  );

  console.log(navs[parentInd]['children']);
}

if(policy['users'].read != false && type=='station' ){

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

if(policy['users'].read != false && type=='depot' ){

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


}


function findInd(array, val){
  return (array.findIndex((element) => element.name == val) != -1) ? array.findIndex((element) => element.name == val) : false ;
}






export const navItems: INavData[] = navs;
// [
//   {
//     name: 'Dashboard',
//     url: '/dashboard',
//     icon: 'icon-speedometer',
//     // badge: {
//     //   variant: 'info',
//     //   text: 'NEW'
//     // }
//   },
//   {
//     title: true,
//     name: 'Transactions'
//   },
//   {
//     name: 'Trans. Mgt.',
//     url: '/transmgt',
//     icon: 'icon-basket',
//     children: [
//       {
//         name: 'MV to DV',
//         url: '/transmgt/mvtodv',
//         icon: 'icon-basket'
//       },
//       {
//         name: 'DV to Depot',
//         url: '/transmgt/dvtodep',
//         icon: 'icon-basket'
//       },
//       {
//         name: 'Depot Truckout',
//         url: '/transmgt/deptruckout',
//         icon: 'icon-basket'
//       },
//       {
//         name: 'Station Receipt',
//         url: '/transmgt/statreceipt',
//         icon: 'icon-basket'
//       },


//     ]
//   },
//   {
//     title: true,
//     name: 'Users'
//   },
//   {
//     name: 'User. Mgt.',
//     url: '/usermgt',
//     icon: 'icon-user',
//     children: [
//       {
//         name: 'Regulatory Users',
//         url: '/usermgt/regusermgt',
//         icon: 'icon-user'
//       },
//       {
//         name: 'Inspectors',
//         url: '/usermgt/inspector',
//         icon: 'icon-user'
//       },
//       {
//         name: 'Station Users',
//         url: '/usermgt/statusermgt',
//         icon: 'icon-user'
//       },
//       {
//         name: 'Depot Users',
//         url: '/usermgt/depusermgt',
//         icon: 'icon-user'
//       },



//     ]
//   },
//   {
//     title: true,
//     name: 'Assets'
//   },
//   {
//     name: 'Asset Mgt.',
//     url: '/assetmgt',
//     icon: 'icon-layers',
//     children: [
//       {
//         name: 'Mother Vessels',
//         url: '/assetmgt/mvmgt',
//         icon: 'icon-layers'
//       },
//       {
//         name: 'Daughter Vessels',
//         url: '/assetmgt/dvmgt',
//         icon: 'icon-layers'
//       },
//       {
//         name: 'Depots',
//         url: '/assetmgt/depotmgt',
//         icon: 'icon-layers'
//       },
//       {
//         name: 'Depot Tanks',
//         url: '/assetmgt/dtankmgt',
//         icon: 'icon-layers'
//       },
//       {
//         name: 'Stations',
//         url: '/assetmgt/statmgt',
//         icon: 'icon-layers'
//       },
//       {
//         name: 'Station Tanks',
//         url: '/assetmgt/tankmgt',
//         icon: 'icon-layers'
//       },
//       {
//         name: 'Inspectors',
//         url: '/assetmgt/inspectmgt',
//         icon: 'icon-layers'
//       },
//       {
//         name: 'Products',
//         url: '/assetmgt/prodmgt',
//         icon: 'icon-layers'
//       },
//       {
//         name: 'Trucks',
//         url: '/assetmgt/truckmgt',
//         icon: 'icon-layers'
//       },
//       {
//         name: 'Devices',
//         url: '/assetmgt/devicemgt',
//         icon: 'icon-layers'
//       },

//     ]
//   },
//   {
//     title: true,
//     name: 'Others'
//   },
//   {
//     name: 'Settings',
//     url: '/settings',
//     icon: 'icon-wrench',
//     children: [
//       {
//         name: 'Role Mgt',
//         url: '/settings/rolemgt',
//         icon: 'icon-wrench'
//       },

//     ]
//   },

//   {
//     name: 'Logout',
//     url: '/',
//     variant: 'danger',
//     icon: 'icon-lock',

//   },

// =========================================================================
// {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Navbars',
  //       url: '/base/navbars',
  //       icon: 'icon-puzzle'

  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
  // ==================================================
// ];
