import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetmgtRoutingModule } from './assetmgt-routing.module';
import { CardsComponent } from '../base/cards.component';
import { FormsComponent } from '../base/forms.component';
import { SwitchesComponent } from '../base/switches.component';
import { TablesComponent } from '../base/tables.component';
import { TabsComponent } from '../base/tabs.component';
import { CarouselsComponent } from '../base/carousels.component';
import { CollapsesComponent } from '../base/collapses.component';
import { PaginationsComponent } from '../base/paginations.component';
import { PopoversComponent } from '../base/popovers.component';
import { ProgressComponent } from '../base/progress.component';
import { TooltipsComponent } from '../base/tooltips.component';
import { NavbarsComponent } from '../base/navbars/navbars.component';
import { FormsModule } from '@angular/forms';
import { TabsModule, CarouselModule } from 'ngx-bootstrap';
import { MvesselsComponent } from './mvessels.component';
import { DvesselsComponent } from './dvessels.component';
import { DepotsComponent } from './depots.component';
import { StationsComponent } from './stations.component';
import { TanksComponent } from './tanks.component';
import { ProductsComponent } from './products.component';
import { TrucksComponent } from './trucks.component';
import { DevicesComponent } from './devices.component';
import { InspectorsComponent } from './inspectors.component';
import { DataTablesModule } from 'angular-datatables';
import { DtanksComponent } from './dtanks.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
  MvesselsComponent,
  DvesselsComponent,
  DepotsComponent,
  StationsComponent,
  TanksComponent,
  ProductsComponent,
  TrucksComponent,
  DevicesComponent,
  InspectorsComponent,
  DtanksComponent
],
imports: [
  CommonModule,
  AssetmgtRoutingModule,
  FormsModule,
  DataTablesModule,
  NgMultiSelectDropDownModule.forRoot(),
    // BsDropdownModule.forRoot(),
    // TabsModule,
    // CarouselModule.forRoot(),
    // CollapseModule.forRoot(),
    // PaginationModule.forRoot(),
    // PopoverModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // TooltipModule.forRoot()
  ]
})
export class AssetmgtModule { }
