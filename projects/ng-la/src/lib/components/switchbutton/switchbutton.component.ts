import { Component, OnInit, forwardRef, OnChanges, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'la-switchbutton',
  templateUrl: './switchbutton.component.html',
  styleUrls: ['./switchbutton.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaSwitchbuttonComponent),
      multi: true
    }
  ]
})
export class LaSwitchbuttonComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() label: string;
  @Input() disabled: boolean;
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

  @Input()
  get invalidError() {
    return this._invalidError;
  }
  set invalidError(val: string) {
    this._invalidError = val;
  }
  private _invalidError: string;

  @Output() change: EventEmitter<any> = new EventEmitter();


  onChange: any = () => { };
  onTouched: any = () => { };

  hasChange:boolean;

  constructor(private utilsService: UtilsService) {
    this.required = false;
    this.disabled = false;
    this.hasChange = false;
    this.invalidError = null;
  }

  ngOnInit() { }
  
  ngOnChanges() {
    this.change.emit(this.value);
  }

  writeValue(value: any): void {
    if (typeof value !== 'boolean' && value !== null) {
      // console.error(`Error: la-switchbutton - Invalid ${value} value for ngModel field.`);
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
