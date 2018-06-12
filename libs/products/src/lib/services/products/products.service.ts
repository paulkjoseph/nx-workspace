import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '@nx-workspace/data-models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(category = null): Observable<Product[]> {
    const url =
      category !== null
        ? `http://localhost:3000/products?category=${category}`
        : `http://localhost:3000/products`;
    return this.httpClient.get<Product[]>(url);
  }
}
