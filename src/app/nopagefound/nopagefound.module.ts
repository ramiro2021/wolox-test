import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NopagefoundRoutingModule } from './nopagefound-routing.module';
import { NopagefoundComponent } from './nopagefound.component';


@NgModule({
  declarations: [NopagefoundComponent],
  exports: [NopagefoundComponent],
  imports: [
    CommonModule,
    NopagefoundRoutingModule
  ]
})
export class NopagefoundModule { }
