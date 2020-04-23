import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import {AnoopComponent} from './anoop/anoop.component';

const routes: Routes = [{ path: 'add', component: AddbookComponent },
                        { path: 'view', component: ViewbookComponent },
                        { path: 'xyz', component: AnoopComponent },
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
