import { Component, Input, Output, EventEmitter, forwardRef, OnChanges, SimpleChanges, SimpleChange, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LaSelectItem } from '../../common/models';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'la-selectbutton',
  templateUrl: './selectbutton.component.html',
  styleUrls: ['./selectbutton.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaSelectbuttonComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaSelectbuttonComponent implements ControlValueAccessor, OnChanges {


  @Input() options: LaSelectItem[];
  @Input() label: string;
  @Input() disabled: boolean;

  @Input() invalidError: string;
  @Input() required: boolean;

  @Input()
  get value() {
    return this._value;
  }
  set value(val) {
    const option = this.options.find(i => i.value === val);
    if (option) {
      this._value = option.value;
      this.onChange(val);
      this.onTouched();
    }
  }
  private _value: any;

  @Output() change = new EventEmitter();

  hasChange:boolean;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private utilsService: UtilsService,
              private cd: ChangeDetectorRef) {
    this.required = false;
    this.disabled = false;
    this.hasChange = false;
    this.invalidError = null;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.invalidError) {
      const currentInvalidError: SimpleChange = changes.invalidError;
      if (currentInvalidError.currentValue ) {
        this.invalidError = currentInvalidError.currentValue;
      }
    }
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
      this.cd.markForCheck();
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

  isInvalid() {
    return this.invalidError !== null;
  }

  getValidationErr() {
    return this.invalidError;
  }

  isRTL() {
    return this.utilsService.isRTL();
  }
}
