import { Component, DoCheck} from '@angular/core';
import { SELECT_INGRESO } from '../../constantes-ingreso-egreso';
import { ItemSaldo } from '../../models/item-saldos.model';
import { FinanzaService } from '../../services/finanza.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements DoCheck {

  titulo: string;
  listaItems: Array<ItemSaldo> = [];
  estilo: boolean =  true;
  
  constructor(private finanzaService: FinanzaService) { 
    this.titulo = SELECT_INGRESO;
  }


  ngDoCheck(): void {
    this.listaItems = this.finanzaService.getListaItemsIngreso();
  }

  quitarElemento(index: number){
    this.listaItems = this.finanzaService.quitarItemIngreso(index);
  }

  enviarItemAEgreso(index: number){
    let item: ItemSaldo = this.listaItems[index];
    this.quitarElemento(index);
    this.finanzaService.agregarItemEgreso(item);
  }
}

