import { Paises } from "./data-load";
import { Productos } from "./productos";

export class Detalles  {
    constructor(public detalles:string, public paises:Paises, public productos:Productos){
  }

}