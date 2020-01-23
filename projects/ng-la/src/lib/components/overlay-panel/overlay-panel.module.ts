import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaOverlayPanelComponent } from './overlay-panel.component';



@NgModule({
  declarations: [
    LaOverlayPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaOverlayPanelComponent
  ],
})
export class LaOverlayPanelModule { }
