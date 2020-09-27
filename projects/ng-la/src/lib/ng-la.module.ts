import { NgModule } from '@angular/core';
import { NgLaComponent } from './ng-la.component';
import { LaInputModule } from './components/input/input.module';
import { LaDropDownModule } from './components/dropdown/dropdown.module';
import { LaCalendarModule } from './components/calendar/calendar.module';
import { LaDatepickerModule } from './components/datepicker/datepicker.module';
import { LaSelectbuttonModule } from './components/selectbutton/selectbutton.module';
import { LaSwitchbuttonModule } from './components/switchbutton/switchbutton.module';
import { LaListBoxModule } from './components/listbox/listbox.module';
import { LaDialogModule } from './components/dialog/dialog.module';
import { LaButtonModule } from './components/button/button.module';
import { LaTooltipModule } from './components/tooltip/tooltip.module';
import { LaOverlayPanelModule } from './components/overlaypanel/overlaypanel.module';
import { CommonModule } from '@angular/common';
import { LaInputDirective } from './components/input/input.directive';
import { LaNumberPickerModule } from './components/number-picker';
import { LaLoaderModule } from './components/loader';



@NgModule({
  declarations: [
    NgLaComponent,
    LaInputDirective
  ],
  imports: [
    CommonModule,
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
    LaTooltipModule,
    LaOverlayPanelModule,
    LaNumberPickerModule,
    LaLoaderModule
  ]
})
export class NgLaModule { }
