import { NgModule } from '@angular/core';
import { LaDatepickerComponent } from './datepicker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaCalendarComponent } from '../calendar/public_api';
import { LaCalendarModule } from '../calendar/calendar.module';
import { CalendarOverlayService } from './calendar-overlay.service';



@NgModule({
  declarations: [
    LaDatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LaCalendarModule
  ],
  exports: [
    LaDatepickerComponent
  ],
  providers: [
    CalendarOverlayService
  ],
  entryComponents: [LaCalendarComponent]
})
export class LaDatepickerModule { }
