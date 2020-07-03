import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolemgtComponent } from './rolemgt.component';


const routes: Routes = [
  {
    path: '',
    // component: UsermgtComponent,
    data: {
      title: 'Role Management'
    },
    children: [
      // {
      //   path: '',
      //   redirectTo: '/dashboard'
      // },
      {
        path: 'rolemgt',
        component: RolemgtComponent,
        data: {
          title: 'Role Mgt.'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
