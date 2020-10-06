import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTechComponent } from './card-tech/card-tech.component';



@NgModule({
  declarations: [CardTechComponent],
  exports: [CardTechComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
