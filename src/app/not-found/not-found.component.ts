import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div>
      <img src="product-not-found.jpg" alt="product not found " />
    </div>
  `,
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
