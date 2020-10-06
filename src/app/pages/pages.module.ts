import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ListTechsComponent } from './list-techs/list-techs.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListTechsComponent
  ],
  exports: [
    HomeComponent,
    ListTechsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
