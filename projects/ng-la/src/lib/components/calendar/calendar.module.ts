import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaCalendarComponent } from './calendar.component';



@NgModule({
  declarations: [
    LaCalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LaCalendarComponent
  ],
})
export class LaCalendarModule { }
