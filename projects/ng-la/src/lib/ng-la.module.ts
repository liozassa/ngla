import { NgModule } from '@angular/core';
import { NgLaComponent } from './ng-la.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LaInputModule } from './components/input/input.module';
import { LaDropDownModule } from './components/dropdown/dropdown.module';
import { LaCalendarModule } from './components/calendar/calendar.module';
import { LaDatepickerModule } from './components/datepicker/datepicker.module';
import { LaSelectbuttonModule } from './components/selectbutton/selectbutton.module';
import { LaSwitchbuttonModule } from './components/switchbutton/switchbutton.module';
import { LaListBoxModule } from './components/listbox/listbox.module';
import { LaDialogModule } from './components/dialog/dialog.module';
import { LaButtonModule } from './components/button/button.module';
import { LaInputDirective } from './directives/input/input.directive';
import { LaTooltipModule } from './components/tooltip/directives.module';



@NgModule({
  declarations: [
    NgLaComponent,
    LaInputDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    NgLaComponent,
    LaInputModule,
    LaDropDownModule,
    LaCalendarModule,
    LaDatepickerModule,
    LaSelectbuttonModule,
    LaSwitchbuttonModule,
    LaListBoxModule,
    LaDialogModule,
    LaButtonModule,
    LaTooltipModule
  ]
})
export class NgLaModule { }
