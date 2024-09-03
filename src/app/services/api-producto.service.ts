import { Injectable, inject } from '@angular/core';
import { producto } from '../types/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiProductoService {
  private productosUrl = 'data/productos.json'; // Ruta al archivo JSON

  private http: HttpClient = inject(HttpClient); //constructor(private http: HttpClient) {} // el inject crea una instancia de httpclient // el "private http: HttpClient" es lo mismo, injecta creando una instancia

  getAll(): Observable<producto[]> {
    return this.http.get<producto[]>(this.productosUrl);
  }
  getOne(codigo: string): Observable<NonNullable<producto>> {
    return this.getAll().pipe(
      map((productos: producto[]) => {
        const producto = productos.find(
          (producto) => producto.codigo === codigo
        );
        if (!producto) {
          throw new Error('Producto no encontrado'); // O manejar el error de otra manera
        }
        return producto;
      })
    );
  }
}
