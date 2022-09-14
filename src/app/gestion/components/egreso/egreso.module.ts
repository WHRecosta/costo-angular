import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgresoComponent } from './egreso.component';



@NgModule({
  declarations: [EgresoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [EgresoComponent]
})
export class EgresoModule { }
