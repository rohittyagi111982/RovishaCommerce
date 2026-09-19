import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiBaseUrl}/products`;

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    const params = new HttpParams().set('search', searchTerm);
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    const params = new HttpParams().set('categoryId', categoryId);
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
}
