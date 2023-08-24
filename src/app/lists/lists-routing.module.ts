import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInfosComponent } from './lists/general-infos/general-infos.component';

const routes: Routes = [
  {path:"", component:GeneralInfosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
