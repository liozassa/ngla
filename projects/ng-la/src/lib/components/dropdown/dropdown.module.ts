import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaDropdownComponent } from './dropdown.component';
import { LaDdlOptionsComponent } from './ddl-options/ddl-options.component';



@NgModule({
  declarations: [
    LaDropdownComponent,
    LaDdlOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaDropdownComponent
  ],
  entryComponents: [LaDdlOptionsComponent]
})
export class LaDropDownModule { }
