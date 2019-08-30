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

  writeValue(value: any): void {
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

  validate() {
    if (!this.showErrors) {
      return null;
    }
    const validates = [];
    if (!this.value && this.required) {
      validates.push({ 'required': 'Please fill out this field.' });
      // validates.push({ 'required': 'Please choose a option.' });
    }

    
    if (this.min > 0) {
      if (!this.value || this.value < this.min) {
        validates.push({ 'min': 'Please fill out this field.' });
      }
    }

    
    if (this.max > 0) {
      if (!this.value || this.value > this.max) {
        validates.push({ 'max': 'Please fill out this field.' });
      }
    }
    
    console.log('validates', validates);
    return validates.length !== 0 ? validates : null;
  }

  getError() {
    const errors = this.validate()[0];
    const firstError = Object.values(errors)[0];
    console.log('first error', firstError);
    return firstError;
  }
}
