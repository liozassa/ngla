import { Component, OnInit, forwardRef, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator } from '@angular/forms';

@Component({
  selector: 'la-switchbutton',
  templateUrl: './switchbutton.component.html',
  styleUrls: ['./switchbutton.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaSwitchbuttonComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LaSwitchbuttonComponent),
      multi: true
    }
  ]
})
export class LaSwitchbuttonComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {

  @Input() label: string;
  @Input() disabled: boolean;
  @Input() rtl: boolean;

  @Input() showErrors: boolean;
  @Input() validateErrors: {};
  @Input() required: boolean;

  @Input()
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
      this.onChange(val);
      this.onTouched();
  }
  private _value: any;

  @Output() change: EventEmitter<any> = new EventEmitter();


  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    this.change.emit(this.value);
  }

  writeValue(value: any): void {
    if (typeof value !== 'boolean' && value !== null) {
      console.error(`Error: la-switchbutton - Invalid ${value} value for ngModel field.`);
    } else {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  selectItem(value: string) {
    this.value = value;
  }

  isSelected(value: string) {
    return this.value === value;
  }

  validate() {
    const validates = {};
    if (!this.value && this.required) {
      validates['required'] = this.validateErrors && this.validateErrors['required'] ? this.validateErrors['required'] : 'Please choose a option.';
    }
    
    return validates!== {} ? validates : null;
  }

  getError() {
    if (!this.showErrors) {
      return null;
    }
    return Object.values(this.validate())[0];;
  }

}
