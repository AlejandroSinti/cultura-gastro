import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaGastroComponent } from './componentes/lista-gastro/lista-gastro.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { RecetasComponent } from './componentes/recetas/recetas.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RestaurantesComponent } from './componentes/restaurantes/restaurantes.component';
import { MainComponent } from './pages/main/main.component';
import { CulturaComponent } from './pages/cultura/cultura.component';
import { DetallesPComponent } from './pages/detalles-p/detalles-p.component';
import { ProductosPComponent } from './pages/productos-p/productos-p.component';
import { RecetasPComponent } from './pages/recetas-p/recetas-p.component';
import { RestaurantesPComponent } from './pages/restaurantes-p/restaurantes-p.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGastroComponent,
    DetallesComponent,
    RecetasComponent,
    ProductosComponent,
    RestaurantesComponent,
    MainComponent,
    CulturaComponent,
    DetallesPComponent,
    ProductosPComponent,
    RecetasPComponent,
    RestaurantesPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
