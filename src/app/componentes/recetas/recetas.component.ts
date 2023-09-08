import { Component, Input,Output,EventEmitter} from '@angular/core';
import { Recetas } from 'src/app/utils/recetas';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  @Input() recetas:Recetas[] = [];
  @Output() detallesview:EventEmitter<Recetas> = new EventEmitter<Recetas>();
}
