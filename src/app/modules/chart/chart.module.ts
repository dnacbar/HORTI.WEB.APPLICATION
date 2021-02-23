import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartlineComponent } from './chartline/chartline.component';

@NgModule({
  declarations: [ChartlineComponent],
  imports: [
    CommonModule,
    ChartRoutingModule
  ]
})
export class ChartModule { }
