import { NgModule } from '@angular/core';
import { LaInputTextComponent } from './inputText/inputText.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaInputNumberComponent } from './inputNumber/inputNumber.component';



@NgModule({
  declarations: [
    LaInputTextComponent,
    LaInputNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaInputTextComponent,
    LaInputNumberComponent
  ],
})
export class LaInputModule { }
