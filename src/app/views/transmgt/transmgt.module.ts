import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { TransmgtRoutingModule } from './transmgt-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MvtodvComponent } from './mvtodv.component';
import { DvtodepComponent } from './dvtodep.component';
import { DeptruckoutComponent } from './deptruckout.component';
import { StatreceiptComponent } from './statreceipt.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ByidPipe } from '../../byid.pipe';


@NgModule({
  imports: [
    CommonModule,
    TransmgtRoutingModule,
    NgSelectModule,
    FormsModule,
    TabsModule,
    NgMultiSelectDropDownModule.forRoot(),
    DataTablesModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbModule
  ],

    declarations: [ MvtodvComponent, DvtodepComponent, DeptruckoutComponent, StatreceiptComponent,
      ByidPipe ]

})
export class TransmgtModule { }
