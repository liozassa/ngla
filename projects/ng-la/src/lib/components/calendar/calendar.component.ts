import { Component, OnInit, Input, Output, EventEmitter, OnChanges, forwardRef } from '@angular/core';
import * as moment_ from 'moment'; const moment = moment_;
import * as _ from 'lodash';
import { CalendarDate } from '../../common/interfaces';
import { ControlValueAccessor, Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'la-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaCalendarComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LaCalendarComponent),
      multi: true
    }
  ]
})
export class LaCalendarComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {

  @Input() label: string;
  @Input() type: string;
  @Input() endOfDay: boolean;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() rtl: boolean;
  @Input() language: string;

  @Input() showErrors: boolean;
  @Input() validateErrors: {};
  @Input() required: boolean;
  @Input() minDate: Date;
  @Input() maxDate: Date;

  @Input()
  get value(): Date | null {
    if (this.endOfDay === true) {
      return this._value.endOf('day').toDate();
    }
    return this._value.toDate();
  }
  set value(val: Date | null) {
    this._value = moment(val).startOf('day');
    this.onChange(this._value);
    this.onTouched();
  }
  private _value: moment_.Moment = moment().startOf('day');

  @Output() change = new EventEmitter<Date>();
  
  currentDate = moment();
  dayNames: string[];
  monthNames: string[];
  weeks: CalendarDate[][] = [];
  sortedDates: CalendarDate[] = [];

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() {
    this.language = 'en';
    this.dayNames =  ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    this.monthNames =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   }

  ngOnInit() {
    switch (this.language) {
      case 'he':
        this.dayNames =  ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'];
        this.monthNames =  ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
        break;
    
      default:
        break;
    }
  }

  ngOnChanges() {
    this.change.emit(this.value);
  }

  writeValue(value: Date | null): void {
    console.log('calendar writeValue', value);
    if (value) {
      this.currentDate = moment(value);
      this.value = value;
      this.generateCalendar();
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  isToday(date: moment_.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }

  isSelected(date: moment_.Moment): boolean {
    return this._value.toISOString() === date.toISOString();
  }

  isSelectedMonth(date: moment_.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }

  selectDate(date: CalendarDate): void {
    this.value = date.mDate.toDate();
  }

  prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }

  firstMonth(): void {
    this.currentDate = moment(this.currentDate).startOf('year');
    this.generateCalendar();
  }

  lastMonth(): void {
    this.currentDate = moment(this.currentDate).endOf('year');
    this.generateCalendar();
  }

  prevYear(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'year');
    this.generateCalendar();
  }

  nextYear(): void {
    this.currentDate = moment(this.currentDate).add(1, 'year');
    this.generateCalendar();
  }

  generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks: CalendarDate[][] = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
  }

  fillDates(selectedMoment: moment_.Moment): CalendarDate[] {
    console.log('selectedMoment', selectedMoment);
    const firstOfMonth = moment(selectedMoment).startOf('month').day();
    const firstDayOfGrid = moment(selectedMoment).startOf('month').subtract(firstOfMonth, 'days');
    const start = firstDayOfGrid.date();
    return _.range(start, start + 42)
            .map((date: number): CalendarDate => {
              const d = moment(firstDayOfGrid).date(date);
              return {
                today: this.isToday(d),
                selected: this.isSelected(d),
                mDate: d,
              };
            });
  }

  close() {

  }

  validate() {
    const validates = {};
    if (!this.value && this.required) {
      validates['required'] = this.validateErrors && this.validateErrors['required'] ? this.validateErrors['required'] : 'Please fill out this field.';
    }
    
    /*if ((this.minDate) && this.minDate > 0) {
      if (!this.value || this.value.length < this.minlength) {
        validates['minlength'] = this.validateErrors && this.validateErrors['minlength'] ? this.validateErrors['minlength'] : `The value must contain more than ${this.minlength} characters.`;
      }
    }*/

    
    /*if (Number.isInteger(this.maxlength) && this.maxlength > 0) {
      if (!this.value || this.value.length > this.maxlength) {
        validates['maxlength'] = this.validateErrors && this.validateErrors['maxlength'] ? this.validateErrors['maxlength'] : `The value must contain less than ${this.maxlength} characters.`;
      }
    }*/
    return validates!== {} ? validates : null;
  }

  getError() {
    if (!this.showErrors) {
      return null;
    }
    
    return Object.values(this.validate())[0];;
  }

}
