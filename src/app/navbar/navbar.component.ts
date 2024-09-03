import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar">
      <div (click)="onHomeClicked()">
        <img src="navbarIcon.png" alt="Mercadolibre Logo" class="logo" />
        <span class="title">Mercaditolibre</span>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  onHomeClicked(): void {
    this.router.navigate(['/home']);
  }
}
