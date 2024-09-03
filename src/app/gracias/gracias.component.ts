import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gracias',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <p>Gracias por intentar contactarse con nosotros!.</p>
      <p>
        Si aún no realizó un pago, nuestro equipo de soporte se pondra en
        contacto con usted dentro de las proximas 24 hs.
      </p>
      <p>
        Si ya realizó el pago, no hay devoluciones. Para quejas llamar al
        0800-1164-ocupado
      </p>
      <button type="button" class="btn" (click)="onHomeClicked()">
        CONTINUAR COMPRANDO
      </button>
    </div>
  `,
  styleUrl: './gracias.component.css',
})
export class GraciasComponent {
  constructor(private router: Router) {}
  onHomeClicked(): void {
    this.router.navigate(['/home']);
  }
}
