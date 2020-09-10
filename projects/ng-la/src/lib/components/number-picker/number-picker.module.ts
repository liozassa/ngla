import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaNumberPickerComponent } from './number-picker.component';



@NgModule({
  declarations: [
    LaNumberPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaNumberPickerComponent
  ],
})
export class LaNumberPickerModule { }
