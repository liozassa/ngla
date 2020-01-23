import { Component, OnInit, forwardRef, Input, Output, EventEmitter, OnChanges, HostListener, ElementRef, SimpleChanges, SimpleChange, ComponentRef, Self } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { LaSelectItem } from '../../common/models';
import { OverlayRef, OverlayPositionBuilder, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LaDdlOptionsComponent } from './ddl-options/ddl-options.component';

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
  ]
})

export class LaDropdownComponent implements OnInit, ControlValueAccessor, OnChanges {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.el.nativeElement.contains(event.target)) {
      if (this.state === 'large') {
        this.state = 'small';
        this.hasChange = true;
        this.overlayRef.detach();
      }
    }
  }

  @Input() options: LaSelectItem[];
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() placeholder: string = 'Select one option';
  @Input() optionHeight: number = 150;
  @Input() optionWidth: number = this.el.nativeElement.offsetWidth;

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
    this.state = 'small';
  }
  private _value: any;

  private overlayRef: OverlayRef;

  @Output() change = new EventEmitter();


  selectedItem: string;
  state: string = 'small';
  hasChange:boolean;


  

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private el: ElementRef,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private overlay: Overlay) {
    this.required = false;
    this.disabled = false;
    this.hasChange = false;
    this.invalidError = null;
  }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
    .flexibleConnectedTo(this.el)
    .withPositions([{
      originX: (this.position === 'top') || (this.position === 'bottom') ? 'center' : this.position === 'left' ? 'start' : 'end',
      originY: (this.position === 'left') || (this.position === 'right') ? 'center' : this.position === 'top' ? 'top' : 'bottom',
      overlayX: (this.position === 'top') || (this.position === 'bottom') ? 'center' : this.position === 'left' ? 'end' : 'start',
      overlayY: (this.position === 'left') || (this.position === 'right') ? 'center' : this.position === 'top' ? 'bottom' : 'top'
    }]);

    this.overlayRef = this.overlay.create({ positionStrategy });

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

    this.animateMe();
  }

  selecteItem(value: string) {
    this.value = value;
  }


  animateMe() {
    if (this.disabled) {
      return;
    }

    if (this.state === 'large') {
      this.hasChange = true;
      this.state = 'small';
      this.overlayRef.detach();
    } else {
      const tooltipPortal = new ComponentPortal(LaDdlOptionsComponent);
      const tooltipRef: ComponentRef<LaDdlOptionsComponent> = this.overlayRef.attach(tooltipPortal);
      tooltipRef.instance.options = this.options;
      tooltipRef.instance.optionHeight = this.optionHeight;
      tooltipRef.instance.optionWidth = this.optionWidth;
      tooltipRef.instance.state = 'large';
      tooltipRef.instance.change.subscribe(option => {
        this.value = option.value;
        this.overlayRef.detach();
      });
      this.state = 'large';
    }
  }

  isInvalid() {
    return this.invalidError !== null;
  }

  getValidationErr() {
    return this.invalidError;
  }

}
