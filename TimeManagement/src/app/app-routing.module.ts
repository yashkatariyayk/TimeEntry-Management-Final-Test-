import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditTimeComponent } from './time-entry/add-edit-time/add-edit-time.component';
import { TimelistComponent } from './time-entry/timelist/timelist.component';


const routes: Routes = [
  {path:'addtime',component:AddEditTimeComponent},
{path:"time",component:TimelistComponent}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
