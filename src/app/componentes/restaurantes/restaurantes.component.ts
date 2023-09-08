import { Component,Input } from '@angular/core';
import { Restaurantes } from 'src/app/utils/restaurantes';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {
  @Input() restaurantes:Restaurantes[]= [];

}
