import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosGeneralesComponent } from './datos-generales.component';



@NgModule({
  declarations: [DatosGeneralesComponent],
  imports: [
    CommonModule
  ],
  exports: [DatosGeneralesComponent]
})
export class DatosGeneralesModule { }
