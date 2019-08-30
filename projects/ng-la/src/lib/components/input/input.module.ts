import { NgModule } from '@angular/core';
import { LaInputTextComponent } from './inputText/inputText.component';
import { LaInputDirective } from './input.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaInputNumberComponent } from './inputNumber/inputNumber.component';



@NgModule({
  declarations: [
    LaInputTextComponent,
    LaInputNumberComponent,
    LaInputDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaInputTextComponent,
    LaInputNumberComponent,
    LaInputDirective
  ],
})
export class LaInputModule { }
