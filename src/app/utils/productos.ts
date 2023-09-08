import { Recetas } from "./recetas";

export class Productos  {
    constructor(public name:string, public detalles:string,public imagen:string, public recetas:Recetas){
    }
}