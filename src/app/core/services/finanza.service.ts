import { Injectable } from '@angular/core';
import { ItemSaldo } from '../models/item-saldos.model';


@Injectable({
  providedIn: 'root'
})
export class FinanzaService {

  private presupuestoDisponible: number = 0.00;
  private totalIngresos: number = 0.00;
  private totalEgresos: number = 0.00;
  private listaItemsIngreso: Array<ItemSaldo> = [];
  private listaItemsEgreso: Array<ItemSaldo> = [];

  constructor() { }


  refrescarDatos(){
    this.calcularPresupuestoDisponible();
  }

  getListaItemsIngreso(){
    return this.listaItemsIngreso;
  }
  getListaItemsEgreso(){
    return this.listaItemsEgreso;
  }
  getTotalIngresos(){
    return this.totalIngresos;
  }
  getTotalEgresos(){
    return this.totalEgresos;
  }
  getPresupuestoDisponible(){
    return this.presupuestoDisponible;
  }

  getPorcentajeRespecto(item:number){
    return (this.totalIngresos  > 0 && item >= 0) ? (item / this.totalIngresos ) : 0;
  }



  agregarItemIngreso(item: ItemSaldo){
    this.listaItemsIngreso.push(item);
    this.calcularTotalIngresos();
    this.calcularPresupuestoDisponible();
  }
  agregarItemEgreso(item: ItemSaldo){
    this.listaItemsEgreso.push(item);
    this.calcularTotalEgreso();
    this.calcularPresupuestoDisponible();
  }
  quitarItemIngreso(index: number){
    this.listaItemsIngreso.splice(index,1);
    this.calcularTotalIngresos();
    this.calcularPresupuestoDisponible();
    return this.listaItemsIngreso;
  }
  quitarItemEgreso(index: number){
    this.listaItemsEgreso.splice(index,1);
    this.calcularTotalEgreso();
    this.calcularPresupuestoDisponible();
    return this.listaItemsEgreso;
  }

  calcularTotalIngresos(){
    this.totalIngresos = 0.0;
    this.listaItemsIngreso.map(item =>{
      this.totalIngresos += Number.parseFloat(item.dinero);
    })
  }
  calcularTotalEgreso(){
    this.totalEgresos = 0.0;
    this.listaItemsEgreso.map(item =>{
      this.totalEgresos += Number.parseFloat(item.dinero);
    })
  }

  calcularPresupuestoDisponible(){
    this.presupuestoDisponible = this.totalIngresos - this.totalEgresos;
  }




}
