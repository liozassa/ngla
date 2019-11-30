import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaButtonComponent } from './button.component';



@NgModule({
  declarations: [
    LaButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaButtonComponent
  ],
})
export class LaButtonModule { }
