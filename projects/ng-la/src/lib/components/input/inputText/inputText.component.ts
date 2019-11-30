import { Component, OnInit, Input, Output, EventEmitter, forwardRef, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'la-inputText',
  templateUrl: './inputText.component.html',
  styleUrls: ['./inputText.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaInputTextComponent),
      multi: true
    }
  ]
})
export class LaInputTextComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() label: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() placeholder: boolean;

  @Input() showErrors: boolean;
  @Input() invalidError: string;
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

  @Output() change = new EventEmitter();

  private onChange: any = () => { };
  private onTouched: any = () => { };

  hasChange:boolean;

  constructor() {
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.showErrors = false;
    this.hasChange = false;
   }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const errorMsg: SimpleChange = changes.invalidError;
    if (errorMsg ) {
      console.log('errorMsg currentValue', errorMsg.currentValue);
      // this.errors = errors.currentValue;
    }
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
}
