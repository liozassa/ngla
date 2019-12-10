import { Component, OnInit, forwardRef, Input, Output, EventEmitter, OnChanges, HostListener, ElementRef, SimpleChanges, SimpleChange } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { LaSelectItem } from '../../common/models';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'la-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaDropdownComponent),
      multi: true
    }
  ],
  animations: [
    trigger('ddlopen', [
      state('small', style({ height: '0px'})),
      state('large', style({ height: '100px'})),
      transition('small <=> large', animate('400ms ease-in'))
    ])
  ]
})

export class LaDropdownComponent implements OnInit, ControlValueAccessor, OnChanges {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.state = 'small';
      this.hasChange = true;
    }
  }

  @Input() options: LaSelectItem[];
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() placeholder: string = 'Select one option';

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
      this.selectedItem = option ? option.label : this.placeholder;
    } else {
      this.selectedItem = this.placeholder || 'Selece one option';
    }
    this.state = 'small';
  }
  private _value: any;

  @Output() change = new EventEmitter();


  selectedItem: string;
  state: string = 'small';
  hasChange:boolean;


  

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private eRef: ElementRef) {
    this.required = false;
    this.disabled = false;
    this.hasChange = false;
    this.invalidError = null;
  }

  ngOnInit(): void {
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
    if (!value && value !== null) {
      console.error(`Error: la-dropdown - Invalid ${value} value for ngModel field.`);
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

  openDdl() {
    if (this.disabled) {
      return;
    }

    this.animateMe();
  }

  selecteItem(value: string) {
    this.value = value;
  }


  animateMe() {
    if (this.state === 'large') {
      this.hasChange = true;
    }
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  isInvalid() {
    return this.invalidError !== null;
  }

  getValidationErr() {
    return this.invalidError;
  }

}
