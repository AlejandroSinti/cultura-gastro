import { Component,Input, Output,EventEmitter} from '@angular/core';
import { Detalles } from 'src/app/utils/detalles';
import { Listagastro } from 'src/app/utils/lista-gastro';
@Component({
  selector: 'app-lista-gastro',
  templateUrl: './lista-gastro.component.html',
  styleUrls: ['./lista-gastro.component.css']
})

export class ListaGastroComponent {
  @Input() listagastros:Listagastro[]= [];
  @Output() detallesview:EventEmitter<Detalles> = new EventEmitter<Detalles>();
  
  irdetalle(detalles:Detalles){
    this.detallesview.emit(detalles);
  }
}

