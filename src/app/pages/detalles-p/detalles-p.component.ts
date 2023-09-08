import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Detalles } from 'src/app/utils/detalles';
import { Productos } from "src/app/utils/productos";

@Component({
  selector: 'app-detalles-p',
  templateUrl: './detalles-p.component.html',
  styleUrls: ['./detalles-p.component.css']
})

export class DetallesPComponent {

@Input() detalles:Detalles | null = null;
@Output() productosview:EventEmitter<Productos> = new EventEmitter<Productos>();

goToProductos(productos:Productos){
  this.productosview.emit(productos);
}
}
