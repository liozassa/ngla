import { NgModule } from '@angular/core';
import { LaInputTextComponent } from './inputText/inputText.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaInputNumberComponent } from './inputNumber/inputNumber.component';
import { LaInputPasswordComponent } from './inputPassword/inputPassword.component';



@NgModule({
  declarations: [
    LaInputTextComponent,
    LaInputNumberComponent,
    LaInputPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaInputTextComponent,
    LaInputNumberComponent,
    LaInputPasswordComponent
  ],
})
export class LaInputModule { }
