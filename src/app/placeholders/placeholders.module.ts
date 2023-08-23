import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { PlaceholderelementComponent } from './placeholderelement/placeholderelement.component';
import { SharedModule } from 'app/shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    PlaceholderComponent,
    PlaceholderelementComponent,
    SegmentComponent,
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule,
    SharedModule
  ],
  exports:[
    // PlaceholderComponent
  ]
})
export class PlaceholdersModule { }
