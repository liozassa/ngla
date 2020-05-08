import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnChanges, SimpleChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';
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
export class LaSelectbuttonComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() label: string;
  @Input() options: LaSelectItem[];
  @Input() disabled: boolean;

  @Input() invalidError: string;
  @Input() required: boolean;

  @Input()
  get value() {
    return this._value;
  }
  set value(val) {
    console.log('set value', val);
    const option = this.options.find(i => i.value === val);
    if (option) {
      this._value = option.value;
      this.onChange(val);
      this.onTouched();
    }
  }
  private _value: any;

  @Output() change = new EventEmitter();


  private onChange: any = () => { };
  private onTouched: any = () => { };

  hasChange:boolean;

  constructor(private utilsService: UtilsService) {
    this.required = false;
    this.disabled = false;
    this.hasChange = false;
    this.invalidError = null;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.invalidError) {
      const currentInvalidError: SimpleChange = changes.invalidError;
      if (currentInvalidError.currentValue ) {
        this.invalidError =  currentInvalidError.currentValue;
      }
    }
    this.change.emit(this.value);
  }

  writeValue(value: any): void { 
    console.log('writeValue', value);
    if (value) {
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
