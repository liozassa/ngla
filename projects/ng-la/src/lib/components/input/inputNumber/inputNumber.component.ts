import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'la-inputNumber',
  templateUrl: './inputNumber.component.html',
  styleUrls: ['./inputNumber.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaInputNumberComponent),
      multi: true
    }
  ]
})
export class LaInputNumberComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() label: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: boolean;
  @Input() invalidError: string;
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
  private _value: number;

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

  writeValue(value: number): void {
    if (value !== null && !Number.isInteger(value)) {
      // console.error(`Error: la-inputNumber - Invalid ${value} value for ngModel field.`);
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

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  isInvalid() {
    return this.invalidError !== null;
  }

  getValidationErr() {
    return this.invalidError;
  }
}
