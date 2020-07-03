import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
