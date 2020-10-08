import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTechsComponent } from './list-techs/list-techs.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { TechsGuard } from '../guards/techs.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'list-tech', component: ListTechsComponent, canActivate: [TechsGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
