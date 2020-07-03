import { InspectorsComponent } from './inspectors.component';
import { DevicesComponent } from './devices.component';
import { ProductsComponent } from './products.component';
import { StationsComponent } from './stations.component';
import { DepotsComponent } from './depots.component';
import { DvesselsComponent } from './dvessels.component';
import { MvesselsComponent } from './mvessels.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TanksComponent } from './tanks.component';
import { TrucksComponent } from './trucks.component';
import { DtanksComponent } from './dtanks.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Asset Management'
    },
    children: [
      // {
      //   path: '',
      //   redirectTo: '/dashboard'
      // },
      {
        path: 'mvmgt',
        component: MvesselsComponent,
        data: {
          title: 'Mother Vessels'
        }
      },
      {
        path: 'dvmgt',
        component: DvesselsComponent,
        data: {
          title: 'Daughter Vessels'
        }
      },
      {
        path: 'depotmgt',
        component: DepotsComponent,
        data: {
          title: 'Depots'
        }
      },
      {
        path: 'statmgt',
        component: StationsComponent,
        data: {
          title: 'Stations'
        }
      },
      {
        path: 'tankmgt',
        component: TanksComponent,
        data: {
          title: 'Station Tanks'
        }
      },
      {
        path: 'dtankmgt',
        component: DtanksComponent,
        data: {
          title: 'Depot Tanks'
        }
      },
      {
        path: 'prodmgt',
        component: ProductsComponent,
        data: {
          title: 'Products'
        }
      },
      {
        path: 'inspectmgt',
        component: InspectorsComponent,
        data: {
          title: 'Inspectors'
        }
      },
      {
        path: 'truckmgt',
        component: TrucksComponent,
        data: {
          title: 'Trucks'
        }
      },
      {
        path: 'devicemgt',
        component: DevicesComponent,
        data: {
          title: 'Devices'
        }
      },
      // {
      //   path: 'popovers',
      //   component: PopoversComponent,
      //   data: {
      //     title: 'Popover'
      //   }
      // },
      // {
      //   path: 'progress',
      //   component: ProgressComponent,
      //   data: {
      //     title: 'Progress'
      //   }
      // },
      // {
      //   path: 'tooltips',
      //   component: TooltipsComponent,
      //   data: {
      //     title: 'Tooltips'
      //   }
      // },
      // {
      //   path: 'navbars',
      //   component: NavbarsComponent,
      //   data: {
      //     title: 'Navbars'
      //   }
      // }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetmgtRoutingModule { }
