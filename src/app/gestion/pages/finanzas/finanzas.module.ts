import { IngresoModule } from './../../components/ingreso/ingreso.module';
import { DatosGeneralesModule } from './../../components/datos-generales/datos-generales.module';
import { DatosCargaModule } from './../../components/datos-carga/datos-carga.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanzasComponent } from './finanzas.component';
import { EgresoModule } from '../../components/egreso/egreso.module';
import { FinanzasRoutingModule } from './finanzas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DatosCargaModule,
    DatosGeneralesModule,
    EgresoModule,
    IngresoModule,
    FinanzasRoutingModule
  ],
  declarations: [FinanzasComponent],
  exports: [FinanzasComponent]

})
export class FinanzasModule { }
