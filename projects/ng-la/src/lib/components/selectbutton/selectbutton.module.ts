import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaSelectbuttonComponent } from './selectbutton.component';



@NgModule({
  declarations: [
    LaSelectbuttonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaSelectbuttonComponent
  ],
})
export class LaSelectbuttonModule { }
