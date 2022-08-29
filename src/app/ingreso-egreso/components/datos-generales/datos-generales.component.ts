import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TITULO_PRINCIPAL } from '../../constantes-ingreso-egreso';
import { FinanzaService } from '../../services/finanza.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit,DoCheck {
  
  titulo: string;

  total: string = "0";
  ingreso: string = "0";
  egreso: string = "0";
  porcentajeEgreso: string = "0";


  constructor(private finanzaService: FinanzaService) { 
    this.titulo = TITULO_PRINCIPAL;
  }


  ngDoCheck(): void {
    this.total = this.finanzaService.getPresupuestoDisponible().toString();
    this.ingreso = this.finanzaService.getTotalIngresos().toString();
    this.egreso = this.finanzaService.getTotalEgresos().toString();
    this.porcentajeEgreso = this.finanzaService.getPorcentajeRespecto(Number.parseFloat(this.egreso)).toString();
  }

  ngOnInit(): void {
  }

}
