import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaDropdownComponent } from './dropdown.component';
import { LaDdlOptionsComponent } from './ddl-options/ddl-options.component';
import { LaInputModule } from '../input';


@NgModule({
  declarations: [
    LaDropdownComponent,
    LaDdlOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LaInputModule
  ],
  exports: [
    LaDropdownComponent
  ],
  entryComponents: [LaDdlOptionsComponent]
})
export class LaDropDownModule { }
