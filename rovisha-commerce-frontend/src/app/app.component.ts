import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="header">
      <div class="container nav">
        <a routerLink="/products" class="logo">Rovisha Commerce</a>
        <nav>
          <a routerLink="/products">Products</a>
        </nav>
      </div>
    </header>

    <main>
      <router-outlet />
    </main>
  `
})
export class AppComponent {}
