import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './containers/products/products.component';
import { MaterialModule } from '@nx-workspace/material/src';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer, initialState as productsInitialState } from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent }]),
    StoreModule.forFeature('products', productsReducer, { initialState: productsInitialState }),
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [ProductsComponent],
  providers: [ProductsEffects]
})
export class ProductsModule {}
