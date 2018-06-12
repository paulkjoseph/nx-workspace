import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { mergeMap, map, tap, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';

import * as productActions from './../+state/products.actions';
import { ProductsService } from './../services/products/products.service';
import { Product } from '@nx-workspace/data-models';

@Injectable()
export class ProductsEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(productActions.ProductsActionTypes.LoadProducts),
    mergeMap(() =>
      this.productService
        .getProducts()
        .pipe(
          map(
            (products: Product[]) =>
              new productActions.LoadProductsSuccess(products)
          ),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        )
    )
  );

  @Effect()
  loadFilteredProducts$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((r: RouterNavigationAction) =>
      r.payload.routerState.url.startsWith('/products')
    ),
    map(
      (r: RouterNavigationAction) =>
        r.payload.routerState.root.queryParams['category']
    ),
    mergeMap((category: string) =>
      this.productService
        .getProducts(category)
        .pipe(
          map(
            (products: Product[]) =>
              new productActions.LoadProductsSuccess(products)
          ),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
