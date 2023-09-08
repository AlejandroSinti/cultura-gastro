import { Component,Output, Input, EventEmitter } from '@angular/core';
import { Detalles } from './utils/detalles';
import { Listagastro } from './utils/lista-gastro';
import { Productos } from './utils/productos';
import { Recetas } from './utils/recetas';
import { Restaurantes } from './utils/restaurantes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cultura-gastro';
  activePage: string = 'main';
  activeDetalle:Detalles | null = null; 
  aciveLista: Listagastro | null = null;
  activeProducto: Productos | null = null;
  activeRecetas: Recetas | null = null;
  activeRestaurantes:Restaurantes| null =null;
  

  displaydetalles(detalles: Detalles){
    this.activePage = "detalles";
    this.activeDetalle= detalles;
  }
  goToSearch() {
    this.activePage = 'main';
  }
  goToProductos(productos:Productos){
    this.activePage = "productos";
    this.activeProducto= productos;
  }
  gotorecetas(recetas:Recetas){
    this.activePage = "recetas";
    this.activeRecetas=recetas;
  }
  gotorestaurantes(restaurantes:Restaurantes){
    this.activePage = "restaurantes";
    this.activeRestaurantes=restaurantes;
  }
}