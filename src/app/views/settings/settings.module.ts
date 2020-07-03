import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { RolemgtComponent } from './rolemgt.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [RolemgtComponent],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
