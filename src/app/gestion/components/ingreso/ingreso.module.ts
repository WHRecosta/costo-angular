import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './ingreso.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [IngresoComponent],
  exports: [IngresoComponent]
})
export class IngresoModule { }
