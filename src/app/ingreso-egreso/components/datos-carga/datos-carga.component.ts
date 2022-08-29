import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BOTON_EGRESO, BOTON_INGRESO, SELECT_EGRESO, SELECT_INGRESO } from '../../constantes-ingreso-egreso';
import { ItemSaldo } from '../../models/item-saldos.model';
import { FinanzaService } from '../../services/finanza.service';



@Component({
  selector: 'app-datos-carga',
  templateUrl: './datos-carga.component.html',
  styleUrls: ['./datos-carga.component.css'],
})
export class DatosCargaComponent implements OnInit {

  formulario = this.formBuilder.group({
    detalle: ['',[Validators.required]],
    dinero: ['',[Validators.required]],
    operacion: [SELECT_INGRESO,[]]
  })

  ingreso: string;
  egreso: string;

  textoBoton: string = BOTON_INGRESO;
  estadoOperacion: boolean = true; // true = agregar_ingreso  ;  false = agregar_egreso

  constructor(
    private formBuilder: FormBuilder,
    private finanzaService: FinanzaService) { 
      this.ingreso = SELECT_INGRESO;
      this.egreso = SELECT_EGRESO;
    }

  ngOnInit(): void {
  }

  agregarItem(){
    let item = new ItemSaldo(
      this.formulario.controls['detalle'].value,
      this.formulario.controls['dinero'].value
    )
    if(this.formulario.controls['operacion'].value == SELECT_INGRESO){
      this.finanzaService.agregarItemIngreso(item);
    }
    else{
      this.finanzaService.agregarItemEgreso(item);
    }
    this.camposPorDefecto();
  }

  cambioSelect(event: any){
    let operacion = event.target.value;
    this.formulario.controls['operacion'].setValue(operacion);
    this.estadoOperacion = operacion == SELECT_INGRESO ? true : false;
    this.textoBoton = this.estadoOperacion ? BOTON_INGRESO : BOTON_EGRESO;
  }


  camposPorDefecto(){
    this.formulario.controls['detalle'].setValue("");
    this.formulario.controls['dinero'].setValue("");
  }
}
