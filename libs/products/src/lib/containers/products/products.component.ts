import { Observable } from 'rxjs';
import { LoadProducts } from './../../+state/products.actions';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Product } from '@nx-workspace/data-models';
import { NavigationExtras, Router } from '@angular/router';
import { ProductsState } from '@nx-workspace/products/src/lib/+state/products.reducer';
import { getProducts } from './../../+state/index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private router: Router, private store: Store<ProductsState>) {}
  ngOnInit() {
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.select(getProducts);
  }
  updateUrlFilters(country: string): void {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: { country }
    };
    this.router.navigate([`/products`], navigationExtras);
  }
}
