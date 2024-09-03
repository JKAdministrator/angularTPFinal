import {
  Component,
  OnInit,
  Input,
  inject,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { producto } from '../types/types';
import { ApiProductoService } from '../services/api-producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @let producto = (this.producto$ | async); @if(!producto){
    <p>Catando producto...</p>
    }@else{
    <div class="product-card">
      <div class="product-details">
        <img class="product-image" src="productos/{{ producto.imagen }}" />
        <div class="data">
          <h2 class="product-name">{{ producto.nombre }}</h2>
          <p class="product-description">{{ producto.descripcion }}</p>
          <p class="product-price">Precio: $ {{ producto.precio }}</p>
          <p class="product-code">Código: {{ producto.codigo }}</p>
        </div>
      </div>
      <button class="buy-button" [disabled]="true">Comprar</button>
    </div>
    }
  `,
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  public producto$!: Observable<producto>;
  private api: ApiProductoService = inject(ApiProductoService);
  @Input('codigo') codigo!: string;

  ngOnInit(): void {
    console.log('initiating', { codigo: this.codigo });
    if (this.codigo) {
      this.producto$ = this.api.getOne(this.codigo);
      console.log(this.producto$);
    }
  }
}
