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
    const validates = []
    if (!this.value && this.required) {
      validates.push({ 'required': 'Please fill out this field.' });
      // validates.push({ 'required': 'Please choose a option.' });
    }
    
    if (this.minlength > 0) {
      if (!this.value || this.value.length < this.minlength) {
        validates.push({ 'minlength': 'Please fill out this field.' });
      }
    }

    
    if (this.maxlength > 0) {
      if (!this.value || this.value.length > this.maxlength) {
        validates.push({ 'maxlength': 'Please fill out this field.' });
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
