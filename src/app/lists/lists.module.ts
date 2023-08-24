import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { GeneralInfosComponent } from './lists/general-infos/general-infos.component';
import { StatisticsComponent } from './lists/lists/statistics/statistics.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    GeneralInfosComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }
