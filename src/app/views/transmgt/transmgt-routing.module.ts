import { StatreceiptComponent } from './statreceipt.component';
import { DeptruckoutComponent } from './deptruckout.component';
import { DvtodepComponent } from './dvtodep.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MvtodvComponent } from './mvtodv.component';


const routes: Routes = [
  {
    path: '',
    // component: TransmgtComponent,
    data: {
      title: 'Transaction Management'
    },
    children: [
      // {
      //   path: '',
      //   redirectTo: '/dashboard'
      // },
      {
        path: 'mvtodv',
        component: MvtodvComponent,
        data: {
          title: 'MV to DV Trans'
        }
      },
      {
        path: 'dvtodep',
        component: DvtodepComponent,
        data: {
          title: 'DV to Depot'
        }
      },
      {
        path: 'deptruckout',
        component: DeptruckoutComponent,
        data: {
          title: 'Depot Truckout'
        }
      },
      {
        path: 'statreceipt',
        component: StatreceiptComponent,
        data: {
          title: 'Station Receipt'
        }
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransmgtRoutingModule { }
