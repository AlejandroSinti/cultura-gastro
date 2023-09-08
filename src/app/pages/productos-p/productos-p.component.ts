import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Productos } from 'src/app/utils/productos';
import { Recetas } from 'src/app/utils/recetas';

@Component({
  selector: 'app-productos-p',
  templateUrl: './productos-p.component.html',
  styleUrls: ['./productos-p.component.css']
})
export class ProductosPComponent {
  @Input() Productos:Productos | null = null;
  @Output() resetasview:EventEmitter<Recetas> = new EventEmitter<Recetas>();

  gotorecetas(recetas:Recetas){
    this.resetasview.emit(recetas);
  }
}
