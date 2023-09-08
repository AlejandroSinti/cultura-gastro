import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Detalles } from 'src/app/utils/detalles';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  @Input() detalles:Detalles[] = [];
  @Output() detallesview:EventEmitter<Detalles> = new EventEmitter<Detalles>();
  
  irdetalle(detalles:Detalles){
    this.detallesview.emit(detalles);
  }
}
