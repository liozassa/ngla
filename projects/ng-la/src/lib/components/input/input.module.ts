import { NgModule } from '@angular/core';
import { LaInputTextComponent } from './inputText/inputText.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaInputNumberComponent } from './inputNumber/inputNumber.component';
import { LaInputPasswordComponent } from './inputPassword/inputPassword.component';
import { LaInputSearchComponent } from './inputSearch/inputSearch.component';



@NgModule({
  declarations: [
    LaInputTextComponent,
    LaInputNumberComponent,
    LaInputPasswordComponent,
    LaInputSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaInputTextComponent,
    LaInputNumberComponent,
    LaInputPasswordComponent,
    LaInputSearchComponent
  ],
})
export class LaInputModule { }
