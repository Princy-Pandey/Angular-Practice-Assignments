import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes:Routes= [
  {path:'add', component :AddbookComponent},
  {path:'view', component :ViewbookComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule] 
})
export class AppRoutingModule { }
