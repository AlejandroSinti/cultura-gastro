import { Listagastro } from "src/app/utils/lista-gastro";
import { Detalles} from "./detalles";
import { Productos } from "./productos";
import { Recetas } from "./recetas";
import { Restaurantes } from "./restaurantes";

export class Paises  {
    constructor(public nombre:string, public descripcion:string ,public imagen:string){}
}

export const PAISES: Paises[] = []
PAISES.push(new Paises("Portugal","Mauris porttitor imperdiet erat. Nulla quis nisl tristique dolor hendrerit rhoncus. Vivamus ut elit tortor. In tincidunt, mi non posuere molestie, odio nisi ultricies augue, sed volutpat magna arcu quis nulla. Etiam nulla ligula, fringilla ac lacinia sit amet, aliquam sed est.","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png"))
PAISES.push(new Paises("Grecia","",""))
PAISES.push(new Paises("España","",""))
PAISES.push(new Paises("Marruecos","",""))
PAISES.push(new Paises("Mexico","Vestibulum eget dolor ipsum. Vivamus sagittis enim ut pharetra volutpat. Nunc imperdiet arcu libero, quis dignissim ligula consectetur non. Phasellus lobortis gravida arcu, eu bibendum neque egestas nec. Vestibulum a eros id est accumsan elementum. Suspendisse","https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png"))

export const RESTAURANTES: Restaurantes[] = [];
RESTAURANTES.push(new Restaurantes("Restaurante sonia",PAISES[1],"3 Estrellas","https://elceo.com/wp-content/uploads/2023/05/mejores-restaurantes.jpg"))
RESTAURANTES.push(new Restaurantes("Restaurante Alfredo",PAISES[2],"4 Estrellas","https://images.adsttc.com/media/images/580f/fe3b/e58e/ce64/b800/00c0/large_jpg/GIF_p.jpg?1477443126"))

export const RECETAS: Recetas[] = [];
RECETAS.push(new Recetas("El pozole","","https://www.unileverfoodsolutions.com.mx/tendencias/de-mexico-para-el-mundo/platillos-mexicanos/top10-platillos/jcr:content/parsys/content-aside-footer/columncontrol_copy/columnctrl_parsys_1/textimage_copy/image.transform/jpeg-optimized/image.1592429867593.jpg","En esta receta usaremos maíz de lata y carne de puerco y costilla, porque en algunas partes es muy difícil encontrar maíz seco y carne de cabeza de puerco. Aunque esta receta es para el pozole rojo, en México también se cocina el pozole verde y el blanco.",RESTAURANTES[0]))
RECETAS.push(new Recetas("Bacalhau","","https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/Bacalhau%20660x371_0.jpg?itok=PJgjlKcO","Tomemos, por ejemplo, a lo bacalhau asado en el horno con aros de cebolla, aceite de oliva y ajo (a la Lagareiro), a menudo servido con patatas al ajillo y aceite de oliva llamadas patatas al golpe (batatas a murro). En alternativa, el bacalao asado en el horno con una cremosa salsa bechamel y patatas fritas (bacalhau com natas) o frito con patatas, cebolla y huevos revueltos (bacalhau a Brás) o salteado con patatas cocidas, huevos cocidos (bacalhau a Gomes de Sá) son solamente algunas de las muchas combinaciones.",RESTAURANTES[1]))

export const PRODUCTOS: Productos[] = [];
PRODUCTOS.push(new Productos("Bacalhau (bacalao)","El bacalao (bacalhau) – es definitivamente uno de los platos más populares y conocidos de la gastronomía portuguesa. El bacalao se pone a secar al sol y se sala para que se preserve, como se hacía en los viejos tiempos, por lo que se conserva durante mucho más tiempo fuera de la nevera en una despensa, envuelto en papel grueso o, en alternativa, congelado. Cuando se  desee cocinarlo, debe dejarlo remojar en agua cubierta por algunas horas para eliminar el exceso de sal.","https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/Bacalhau%20660x371_0.jpg?itok=PJgjlKcO",RECETAS[1]))
PRODUCTOS.push(new Productos("El pozole","Aenean dictum leo ut arcu aliquam facilisis. Etiam viverra nisi augue. Aliquam id leo pretium, dapibus ante nec, lacinia nisl. Curabitur faucibus vestibulum sodales. Ut non varius justo, vel auctor nunc. ","https://www.unileverfoodsolutions.com.mx/tendencias/de-mexico-para-el-mundo/platillos-mexicanos/top10-platillos/jcr:content/parsys/content-aside-footer/columncontrol_copy/columnctrl_parsys_1/textimage_copy/image.transform/jpeg-optimized/image.1592429867593.jpg",RECETAS[0]))

export const DETALLES: Detalles[] = []
DETALLES.push(new Detalles('detalle 1',PAISES[0],PRODUCTOS[0]));
DETALLES.push(new Detalles('detalle 2',PAISES[4],PRODUCTOS [1]));

export const LISTAGASTRO: Listagastro[] = [];
LISTAGASTRO.push(new Listagastro('Comida mediterranea', "https://media.gq.com.mx/photos/5fe11a9634f0ef41de7cec9a/4:3/w_2664,h_1998,c_limit/DIETA.jpg", DETALLES[0]));
LISTAGASTRO.push(new Listagastro('Comida mexicana', "https://www.infobae.com/new-resizer/ROLKrYLvmN8Mc9Rzbxap6H4x2ew=/arc-anglerfish-arc2-prod-infobae/public/VOTW6QTDEJDM3IC3RSUG7CKK7Q.jpg", DETALLES[1]));
