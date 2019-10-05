import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaSwitchbuttonComponent } from './switchbutton.component';



@NgModule({
  declarations: [
    LaSwitchbuttonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaSwitchbuttonComponent
  ],
})
export class LaSwitchbuttonModule { }
