import { Component, forwardRef, Input, Output, EventEmitter, OnChanges, ElementRef, SimpleChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { LaSelectItem } from '../../common/models';
import { LaDdlOptionsOverlayRef } from './ddl-options-overlay-ref.';
import { DdlOptionsOverlayService } from './ddl-options-overlay.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LaDropdownComponent implements ControlValueAccessor, OnChanges {

  @Input() options: LaSelectItem[];
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() placeholder: string = 'Select one option';
  @Input() optionHeight: number = 150;
  @Input() search_placeholder: string = 'What are you looking for?';
  @Input() showFilter: boolean = false;
  @Input() autoSearch: boolean = false;

  @Input() invalidError: string;
  @Input() required: boolean;
  @Input('la-dropdown-position') position: string = 'bottom';

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
  }
  private _value: any;

  @Output() change = new EventEmitter();

  open: boolean = false;
  selectedItem: string;
  hasChange:boolean;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private el: ElementRef,
              private ddlOptionsOverlayService: DdlOptionsOverlayService) {
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
    if (!value && value !== null) {
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

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  openDdl() {
    if (this.disabled) {
      return;
    }

    this.open = true;
    let dialogRef: LaDdlOptionsOverlayRef = this.ddlOptionsOverlayService.open(this.el, this.position, this.showFilter, this.autoSearch, this.search_placeholder, this.options, this.optionHeight);
    dialogRef.select.subscribe((option) => {
      this.value = option.value;
      this.change.emit(this.value);
    });
    dialogRef.close.subscribe(_ => {
      this.open = false;
    });
  }

  selecteItem(value: string) {
    this.value = value;
  }

  isInvalid() {
    return this.invalidError !== null;
  }

  getValidationErr() {
    return this.invalidError;
  }

}
