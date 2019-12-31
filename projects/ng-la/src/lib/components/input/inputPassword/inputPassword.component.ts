import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'la-inputPassword',
  templateUrl: './inputPassword.component.html',
  styleUrls: ['./inputPassword.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaInputPasswordComponent),
      multi: true
    }
  ]
})
export class LaInputPasswordComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() label: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: boolean;

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
  private _value: any;

  @Input()
  get invalidError() {
    return this._invalidError;
  }
  set invalidError(val: string) {
    this._invalidError = val;
  }
  private _invalidError: string;

  @Output() change = new EventEmitter();

  private onChange: any = () => { };
  private onTouched: any = () => { };

  hasChange:boolean;

  constructor() {
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.hasChange = false;
    this.invalidError = null;
   }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.invalidError) {
      const currentInvalidError: SimpleChange = changes.invalidError;
      if (currentInvalidError.currentValue ) {
        this.invalidError =  currentInvalidError.currentValue;
      }
    }
    this.change.emit(this.value);
  }

  writeValue(value: string): void {
    if (value === undefined) {
      // console.error(`Error: la-inputText - Invalid ${value} value for ngModel field.`);
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

  isInvalid() {
    return this.invalidError !== null;
  }

  getValidationErr() {
    return this.invalidError;
  }
}