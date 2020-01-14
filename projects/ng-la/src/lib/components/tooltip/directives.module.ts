import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { LaTooltipComponent } from './tooltip.component';
import { LaTooltipDirective } from './tooltip.directive';



@NgModule({
  declarations: [
    LaTooltipDirective,
    LaTooltipComponent
  ],
  imports: [
    OverlayModule
  ],
  exports: [
    LaTooltipDirective
  ],
  entryComponents: [LaTooltipComponent]
})
export class LaTooltipModule { }
