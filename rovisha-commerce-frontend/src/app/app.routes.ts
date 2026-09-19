import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products.component')
        .then(m => m.ProductsComponent)
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/product-details/product-details.component')
        .then(m => m.ProductDetailsComponent)
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];
