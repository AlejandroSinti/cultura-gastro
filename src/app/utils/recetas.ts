import { Restaurantes } from "./restaurantes";

export class Recetas  {
    constructor(public nombre:string, public descripcion:string, public imagen:string, public preparacion:string, public restaurante:Restaurantes){
    }
}