import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@nx-workspace/material/src';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
