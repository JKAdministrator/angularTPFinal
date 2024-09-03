import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <p class="footer-text">
        Mercaditolibre es un tp para el curso Fullstack UTN 2024
      </p>
      <a (click)="onContactoClicked()" class="footer-link">Contacto</a>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private router: Router) {}
  onContactoClicked(): void {
    this.router.navigate(['/contacto']);
  }
}
