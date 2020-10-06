import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTechsComponent } from './list-techs/list-techs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'list-tech', component: ListTechsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
