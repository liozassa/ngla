import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaListBoxComponent } from './listbox.component';
import { LaButtonComponent, LaButtonModule } from '../button';



@NgModule({
  declarations: [
    LaListBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LaButtonModule
  ],
  exports: [
    LaListBoxComponent
  ],
})
export class LaListBoxModule { }
