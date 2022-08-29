import { Component, DoCheck} from '@angular/core';
import { TITULO_EGRESO } from '../../constantes-ingreso-egreso';
import { ItemSaldo } from '../../models/item-saldos.model';
import { FinanzaService } from '../../services/finanza.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements DoCheck {

  titulo: string;
  listaItems: Array<ItemSaldo> = [];
  estilo: boolean =  false;

  constructor(private finanzaService: FinanzaService) {
    this.titulo = TITULO_EGRESO;
   }
  
  ngDoCheck(): void {
    this.listaItems = this.finanzaService.getListaItemsEgreso();

    
  }

  quitarElemento(index: number){
    this.listaItems = this.finanzaService.quitarItemEgreso(index);
  }
  obtenerPorcentaje(valor: string){
    return this.finanzaService.getPorcentajeRespecto(Number.parseFloat(valor)).toString();
  }

}
