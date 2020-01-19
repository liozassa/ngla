import { Component, OnInit, forwardRef, Input, Output, EventEmitter, HostListener, ElementRef, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment_ from 'moment'; const moment = moment_;

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
  ]
})
export class LaDatepickerComponent implements OnInit, ControlValueAccessor, OnChanges {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.showCalendar = false;
    }
  }

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
    this.onChange(this._value);
    this.onTouched();
  }
  private _value: moment_.Moment = moment().startOf('day');

  @Output() change = new EventEmitter<Date>();
  @Output() selectDate = new EventEmitter<Date>();

  showCalendar: boolean;
  date: moment_.Moment = moment();

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private eRef: ElementRef) { 
    this.type = 'calendar';
    this.showCalendar = false;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.change.emit(this.value);
  }

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
