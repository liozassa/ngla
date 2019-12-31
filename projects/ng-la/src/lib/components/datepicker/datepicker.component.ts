import { Component, OnInit, forwardRef, Input, Output, EventEmitter, HostListener, ElementRef, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator } from '@angular/forms';
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
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LaDatepickerComponent),
      multi: true
    }
  ]
})
export class LaDatepickerComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {

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

  @Input() showErrors: boolean;
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
    this.date = val;
    this._value = moment(val).startOf('day');
    this.onChange(this._value);
    this.onTouched();
  }
  private _value: moment_.Moment = moment().startOf('day');

  @Output() change = new EventEmitter<Date>();
  @Output() selectDate = new EventEmitter<Date>();

  showCalendar: boolean;
  date: Date = new Date();

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
      // this.value = new Date(value.setHours(0,0,0,0));
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  /*setDate(event) {
    this.value = event;
    this.change.emit(this.value);
  }*/

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString.replace( /(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
    } else {
      return null;
    }
  }

  onSelsctDate(event: Date) {
    this.value = event;
    this.selectDate.emit(this.value);
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
    return validates !== {} ? validates : null;
  }

  getError() {
    if (!this.showErrors) {
      return null;
    }
    
    return Object.values(this.validate())[0];;
  }

}
