import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GraciasComponent } from './gracias/gracias.component';

export const routes: Routes = [
  { path: '', component: ProductosComponent, title: 'Mercaditolibre' },
  { path: 'home', component: ProductosComponent, title: 'Mercaditolibre' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },
  { path: 'contactoRecibido', component: GraciasComponent, title: 'Contacto' },
  {
    path: 'producto/:codigo',
    component: ProductoComponent,
    title: 'Producto',
  },
  { path: '**', component: NotFoundComponent },
];
