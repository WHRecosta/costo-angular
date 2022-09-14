import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosCargaComponent } from './datos-carga.component';


@NgModule({
  declarations: [DatosCargaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [DatosCargaComponent]
})
export class DatosCargaModule { }
