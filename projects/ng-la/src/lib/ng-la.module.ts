import { NgModule } from '@angular/core';
import { NgLaComponent } from './ng-la.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LaInputModule } from './components/input/input.module';
import { LaDropDownModule } from './components/dropdownlist/dropdown.module';
import { LaCalendarModule } from './components/calendar/calendar.module';



@NgModule({
  declarations: [
    NgLaComponent
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
    LaCalendarModule
  ]
})
export class NgLaModule { }
