import { Component, OnInit, forwardRef, Input, Output, EventEmitter, ElementRef, OnChanges, ComponentRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment_ from 'moment';
import { CalendarOverlayRef } from '../calendar/calendar-overlay-ref.';
import { CalendarOverlayService } from '../calendar/calendar-overlay.service';
 const moment = moment_;

@Component({
  selector: 'la-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaDatepickerComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaDatepickerComponent implements OnInit, ControlValueAccessor { //OnChanges

  @Input() label: string;
  @Input() type: string;
  @Input() endOfDay: boolean;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() language: string;
  @Input() invalidError: string;
  @Input() validateErrors: {};
  @Input() required: boolean;
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() calendarHeight: number = 300;
  @Input() calendarWidth: number = this.el.nativeElement.offsetWidth;
  @Input('la-datepicker-position') position: string = 'bottom';

  @Input()
  get value(): Date {
    if (this.endOfDay === true) {
      return this._value.endOf('day').toDate();
    }
    return this._value.toDate();
  }
  set value(val: Date) {
    this.date = moment(val);
    this._value = moment(val).startOf('day');
    this.onChange(this.value);
    this.onTouched();
  }
  private _value: moment_.Moment = moment().startOf('day');

  @Output() change = new EventEmitter<Date>();
  @Output() selectDate = new EventEmitter<Date>();

  showCalendar: boolean;
  date: moment_.Moment = moment();

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private el: ElementRef,
              private calendarOverlayService: CalendarOverlayService) { 
    this.type = 'calendar';
    this.showCalendar = false;
  }

  ngOnInit() { }

  /*ngOnChanges() {
    this.change.emit(this.value);
  }*/

  writeValue(value: Date | null): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  parseDate(dateString: string): moment_.Moment {
    if (dateString) {
      return moment(dateString.replace( /(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
    } else {
      return null;
    }
  }

  onShowCalendar() {
    let dialogRef: CalendarOverlayRef = this.calendarOverlayService.open(this.el, this.position, this.value);
    dialogRef.select.subscribe((date: Date) => {
      this.value = date;
      this.selectDate.emit(this.value);
    });
  }

  onSelsctDate(event: Date) {
    this.value = event;
    this.selectDate.emit(this.value);
  }

  isInvalid() {
    return this.invalidError !== null;
  }

  getValidationErr() {
    return this.invalidError;
  }

}
