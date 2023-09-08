import { Component,Input } from '@angular/core';
import { Restaurantes } from 'src/app/utils/restaurantes';

@Component({
  selector: 'app-restaurantes-p',
  templateUrl: './restaurantes-p.component.html',
  styleUrls: ['./restaurantes-p.component.css']
})
export class RestaurantesPComponent {
  @Input() restaurantes:Restaurantes | null = null ;
}
