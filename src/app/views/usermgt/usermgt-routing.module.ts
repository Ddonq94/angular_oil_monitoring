import { StationsComponent } from './stations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsermgtComponent } from './usermgt.component';
import { RegsComponent } from './regs.component';
import { InspectorsComponent } from './inspectors.component';
import { DepotsComponent } from './depots.component';


// const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    // component: UsermgtComponent,
    data: {
      title: 'User Management'
    },
    children: [
      // {
      //   path: '',
      //   redirectTo: '/dashboard'
      // },
      {
        path: 'regusermgt',
        component: RegsComponent,
        data: {
          title: 'Regulatory Users'
        }
      },
      {
        path: 'inspector',
        component: InspectorsComponent,
        data: {
          title: 'Inspectors'
        }
      },
      {
        path: 'depusermgt',
        component: DepotsComponent,
        data: {
          title: 'Depot Users'
        }
      },
      {
        path: 'statusermgt',
        component: StationsComponent,
        data: {
          title: 'Station Users'
        }
      }
      // {
      //   path: 'statusermgt',
      //   component: StationsComponent,
      //   data: {
      //     title: 'Station Users'
      //   }
      // }

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermgtRoutingModule { }
