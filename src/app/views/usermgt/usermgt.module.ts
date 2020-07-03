import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermgtRoutingModule } from './usermgt-routing.module';
import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
import { UsermgtComponent } from './usermgt.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InspectorsComponent } from './inspectors.component';
import { RegsComponent } from './regs.component';
import { DepotsComponent } from './depots.component';
import { StationsComponent } from './stations.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';




@NgModule({
  imports: [
    FormsModule,
    UsermgtRoutingModule,
    DataTablesModule,
    // ChartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    NgbModule
  ],
  declarations: [ UsermgtComponent, InspectorsComponent, RegsComponent, DepotsComponent, StationsComponent ]
})

export class UsermgtModule { }
