import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { DatosCargaComponent } from './components/datos-carga/datos-carga.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DatosGeneralesComponent,
    DatosCargaComponent,
    IngresoComponent,
    EgresoComponent,
    FinanzasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FinanzasComponent]
})
export class IngresoEgresoModule { }
