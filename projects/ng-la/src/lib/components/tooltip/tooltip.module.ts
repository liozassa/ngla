import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { LaTooltipComponent } from './tooltip.component';
import { LaTooltipDirective } from './tooltip.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LaTooltipDirective,
    LaTooltipComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    LaTooltipDirective
  ],
  entryComponents: [LaTooltipComponent]
})
export class LaTooltipModule { }
