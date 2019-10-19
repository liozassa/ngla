import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaListBoxComponent } from './listbox.component';



@NgModule({
  declarations: [
    LaListBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaListBoxComponent
  ],
})
export class LaListBoxModule { }
