import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaDropdownComponent } from './dropdown.component';



@NgModule({
  declarations: [
    LaDropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaDropdownComponent
  ],
})
export class LaDropDownModule { }
