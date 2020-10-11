import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ListTechsComponent } from './list-techs/list-techs.component';
import { ComponentsModule } from '../components/components.module';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderbyPipe } from './pipes/orderby.pipe';

// import ngx-translate and the http loader
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    HomeComponent,
    ListTechsComponent,
    FilterPipe,
    OrderbyPipe,

  ],
  exports: [
    HomeComponent,
    ListTechsComponent,
    FilterPipe,
    OrderbyPipe,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    TranslateModule

  ]
})
export class PagesModule { }
