import { Component, Input, Output, EventEmitter, forwardRef, OnChanges, SimpleChanges, SimpleChange, ChangeDetectorRef } from '@angular/core';
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
  ]
})
export class LaSelectbuttonComponent implements ControlValueAccessor, OnChanges {


  @Input() options: LaSelectItem[];
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() multiple_choice: boolean;

  @Input() invalidError: string;
  @Input() required: boolean;

  @Input()
  get value() {
    return this._value;
  }
  set value(val) {
    if (val) {
      if (!this.multiple_choice) {
        this._value = val;
      } else {
        this._value = val;
      }
      this.onChange(val);
      this.onTouched();
    }
  }
  private _value: any[] = [];

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
    this.multiple_choice = false
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

  selectItem(value: any) {
    if (!this.multiple_choice) {
      this.value = value;
    } else if (this.value?.includes(value)) {
      this.value = this.value.filter(v => v !== value);
    } else {
      this.value = [...this.value, value];
    }
  }

  isSelected(value: any) {
    if (!this.multiple_choice) {
      return this.value === value;
    }
    return this.value?.includes(value);
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
