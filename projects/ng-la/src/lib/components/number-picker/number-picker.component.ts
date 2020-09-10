import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import * as moment_ from 'moment'; const moment = moment_;
import * as _ from 'lodash';
import { ControlValueAccessor, Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'la-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaNumberPickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LaNumberPickerComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaNumberPickerComponent implements OnInit, ControlValueAccessor, Validator { //OnChanges

  @Input() label: string;
  @Input() type: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() language: string;

  @Input() showErrors: boolean;
  @Input() validateErrors: {};
  @Input() required: boolean;
  @Input() min: Date;
  @Input() max: Date;

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

  @Output() change = new EventEmitter<number>();
  @Output() selectDate = new EventEmitter<number>();

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private utilsService: UtilsService) {
    this.language = utilsService.getLang();
  }

  ngOnInit() {}

  writeValue(value: number): void {
    this.value = value || 0;
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

  onSelectDate(year: number) {
    this.value = year;
    this.selectDate.emit(this.value);
  }

  prevNumber(): void {
    this.value = this.value - 1;
  }

  nextNumber(): void {
    this.value = this.value + 1;
  }

  validate() {
    const validates = {};
    if (!this.value && this.required) {
      validates['required'] = this.validateErrors && this.validateErrors['required'] ? this.validateErrors['required'] : 'Please fill out this field.';
    }
    return Object.keys(validates).length ? validates : null;
  }

  getError() {
    if (!this.showErrors) {
      return null;
    }
    
    const validates = this.validate();
    if (!validates) {
      return null;
    }

    return Object.values(this.validate())[0];
  }

  isRTL() {
    return this.utilsService.isRTL();
  }

}
