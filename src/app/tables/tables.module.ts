import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TableComponent } from './table/table.component';
import { BiographyComponent } from './biography/biography.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { SharedModule } from 'app/shared/shared.module';
import { TableElementComponent } from './table-element/table-element.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    TableComponent,
    BiographyComponent,
    PartnersComponent,
    CompaniesComponent,
    TableElementComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ]
})
export class TablesModule { }
