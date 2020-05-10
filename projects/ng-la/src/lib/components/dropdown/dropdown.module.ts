import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaDropdownComponent } from './dropdown.component';
import { LaDdlOptionsComponent } from './ddl-options/ddl-options.component';
import { LaInputModule } from '../input';
import { DdlOptionsOverlayService } from './ddl-options-overlay.service';


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
  providers: [
    DdlOptionsOverlayService
  ],
  entryComponents: [LaDdlOptionsComponent]
})
export class LaDropDownModule { }
