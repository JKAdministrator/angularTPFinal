import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { producto } from '../types/types';
import { Observable } from 'rxjs';
import { ApiProductoService } from '../services/api-producto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if(productosResult$ | async; as productosList ){
    <ul class="container">
      @for (producto of productosList; track producto.codigo; let i = $index) {
      <li class="card" (click)="onProductoClicked(producto.codigo)">
        <img src="productos/{{ producto.imagen }}" />
        <div class="data">
          <h2>{{ producto.nombre }}</h2>
          <span>$ {{ producto.precio }}</span>
        </div>
      </li>
      }
    </ul>
    } @else {
    <p>Loading...</p>
    }
  `,
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  public productosResult$!: Observable<producto[]>;
  constructor(
    private apiProducto: ApiProductoService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productosResult$ = this.apiProducto.getAll();
    console.log(this.productosResult$);
  }
  onProductoClicked(productoCodigo: String | undefined): void {
    console.log(`navegando a /producto/${productoCodigo}`);
    this.router.navigate(['/producto', productoCodigo]);
  }
}
