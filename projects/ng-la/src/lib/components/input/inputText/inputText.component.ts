import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator } from '@angular/forms'

@Component({
  selector: 'la-inputText',
  templateUrl: './inputText.component.html',
  styleUrls: ['./inputText.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaInputTextComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LaInputTextComponent),
      multi: true
    }
  ]
})
export class LaInputTextComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {

  @Input() label: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: boolean;

  @Input() showErrors: boolean;
  @Input() validateErrors: {};
  @Input() required: boolean;
  @Input() minlength: number;
  @Input() maxlength: number;

  @Input()
  get value(): any {
    return this._value;
  }
  set value(val: any) {
    this._value = val;
    this.onChange(this._value);
    this.onTouched();
  }

  @Output() change = new EventEmitter();

  private _value: any;
  private onChange: any = () => { };
  private onTouched: any = () => { };

  constructor() {
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.showErrors = false;
   }

  ngOnInit() { 
  }

  ngOnChanges() {
    this.change.emit(this.value);
  }

  writeValue(value: string): void {
    if (value === undefined) {
      console.error(`Error: la-inputText - Invalid ${value} value for ngModel field.`);
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
    if (!this.value && this.required) {
      validates['required'] = this.validateErrors && this.validateErrors['required'] ? this.validateErrors['required'] : 'Please fill out this field.';
    }
    
    if (Number.isInteger(this.minlength) && this.minlength > 0) {
      if (!this.value || this.value.length < this.minlength) {
        validates['minlength'] = this.validateErrors && this.validateErrors['minlength'] ? this.validateErrors['minlength'] : `The value must contain more than ${this.minlength} characters.`;
      }
    }

    
    if (Number.isInteger(this.maxlength) && this.maxlength > 0) {
      if (!this.value || this.value.length > this.maxlength) {
        validates['maxlength'] = this.validateErrors && this.validateErrors['maxlength'] ? this.validateErrors['maxlength'] : `The value must contain less than ${this.maxlength} characters.`;
      }
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
