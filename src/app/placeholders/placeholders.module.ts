import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [
    PlaceholderComponent
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule
  ],
  exports:[
    // PlaceholderComponent
  ]
})
export class PlaceholdersModule { }
