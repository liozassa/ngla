import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator } from '@angular/forms'

@Component({
  selector: 'la-inputNumber',
  templateUrl: './inputNumber.component.html',
  styleUrls: ['./inputNumber.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaInputNumberComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LaInputNumberComponent),
      multi: true
    }
  ]
})
export class LaInputNumberComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {

  @Input() label: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: boolean;

  @Input() showErrors: boolean;
  @Input() validateErrors: {};
  @Input() required: boolean;
  @Input() min: number;
  @Input() max: number;

  @Input()
  get value(): number {
    return this._value;
  }
  set value(val: number) {
    this._value = val;
    this.onChange(this._value);
    this.onTouched();
  }

  @Output() change = new EventEmitter();

  private _value: number;
  private onChange: any = () => { };
  private onTouched: any = () => { };

  constructor() {
    this.required = false;
    this.disabled = false;
    this.readonly = false;
  }

  ngOnInit() { }

  ngOnChanges() {
    this.change.emit(this.value);
  }

  writeValue(value: number): void {
    if (!Number.isInteger(value)) {
      console.error(`Error: la-inputNumber - Invalid ${value} value for ngModel field.`);
    } else {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate() {
    const validates = {};
    if (!Number.isInteger(this.value) && this.value !== 0 && this.required) {
      validates['required'] = this.validateErrors && this.validateErrors['required'] ? this.validateErrors['required'] : 'Please fill out this field.';
    }

    
    if (Number.isInteger(this.min)) {
      if (!Number.isInteger(this.value) || this.value < this.min) {
        validates['min'] = this.validateErrors && this.validateErrors['min'] ? this.validateErrors['min'] : `The value must be less than ${this.min}.`;
      }
    }

    
    if (Number.isInteger(this.max)) {
      if (!Number.isInteger(this.value) || this.value > this.max) {
        validates['max'] = this.validateErrors && this.validateErrors['max'] ? this.validateErrors['max'] : `The value must be greater than ${this.max}.`;
      }
    }
    return validates !== {} ? validates : null;
  }

  getError() {
    if (!this.showErrors) {
      return null;
    }

    return Object.values(this.validate())[0];;
  }
}
