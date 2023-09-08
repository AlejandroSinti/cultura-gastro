import { Component, Output, EventEmitter} from '@angular/core';
import { Listagastro } from 'src/app/utils/lista-gastro';
import { ServiciosService } from 'src/app/servicios.service';
import { Detalles } from 'src/app/utils/detalles';
import { Productos } from 'src/app/utils/productos';
import { Recetas } from 'src/app/utils/recetas';
import { Restaurantes } from 'src/app/utils/restaurantes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  currentOption: string = 'search';
  serachCriteria: string = '';
  searchResultCultura: Listagastro[] = [];
  searchResultDetalles: Detalles[] = [];
  searchResultProductos: Productos[] = [];
  searchResultRestaurantes:Restaurantes[]=[];

  @Output() detallesview:EventEmitter<Detalles> = new EventEmitter<Detalles>();
  @Output() resetasview:EventEmitter<Recetas> = new EventEmitter<Recetas>();

  constructor(private _cultura: ServiciosService) {
  }
  buscarcultura() {
    this.searchResultCultura = this._cultura.searchlista(this.serachCriteria);
  }

  irdetalle(detalle:Detalles){
    this.detallesview.emit(detalle)
  }
  gotorecetas(recetas:Recetas){
    this.resetasview.emit(recetas);
}
}
