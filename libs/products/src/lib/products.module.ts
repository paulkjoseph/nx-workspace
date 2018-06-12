import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './containers/products/products.component';
import { MaterialModule } from '@nx-workspace/material/src';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent }])
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule {}
