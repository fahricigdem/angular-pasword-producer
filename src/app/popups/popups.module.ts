import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from 'app/shared/shared.module';
import { PopupsHomeComponent } from './popups-home/popups-home.component';


@NgModule({
  declarations: [
    ModalComponent,
    PopupsHomeComponent
  ],
  imports: [
    CommonModule,
    PopupsRoutingModule,
    SharedModule
  ]
})
export class PopupsModule { }
