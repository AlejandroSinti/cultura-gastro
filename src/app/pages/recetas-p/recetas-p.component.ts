import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Recetas } from 'src/app/utils/recetas';
import { Restaurantes } from 'src/app/utils/restaurantes';

@Component({
  selector: 'app-recetas-p',
  templateUrl: './recetas-p.component.html',
  styleUrls: ['./recetas-p.component.css']
})
export class RecetasPComponent {
  @Input() recetas:Recetas | null = null ;
  @Output() restaurantesview:EventEmitter<Restaurantes> = new EventEmitter<Restaurantes>();

  gotorestaurantes(restaurantes:Restaurantes){
    this.restaurantesview.emit(restaurantes);
  }
}
