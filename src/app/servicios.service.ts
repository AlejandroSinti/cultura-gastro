import { Injectable } from '@angular/core';
import { Listagastro } from './utils/lista-gastro';
import { DETALLES, LISTAGASTRO, RESTAURANTES } from './utils/data-load';
import { Detalles } from './utils/detalles';
import { Restaurantes } from './utils/restaurantes';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  listacultura: Listagastro[] = LISTAGASTRO;
  detalleslista:Detalles[]= DETALLES;
  restaurantes: Restaurantes[] = RESTAURANTES;
  
  constructor() {}
  searchlista(buscarlista: string) {
    let resultList: Listagastro[] = [];
    resultList = this.listacultura.filter((listagastro) => {
      if (listagastro.name.includes(buscarlista)) { return true; }
      return false;
  });
  return resultList;
  } 
}
