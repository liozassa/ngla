import { Component, OnInit, forwardRef, Input, Output, EventEmitter, HostListener, ElementRef, OnChanges, ComponentRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as moment_ from 'moment';import { LaCalendarComponent } from '../calendar';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayPositionBuilder, Overlay, OverlayRef } from '@angular/cdk/overlay';
 const moment = moment_;

@Component({
  selector: 'la-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LaDatepickerComponent),
      multi: true
    }
  ]
})
export class LaDatepickerComponent implements OnInit, ControlValueAccessor, OnChanges {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.el.nativeElement.contains(event.target)) {
      if (this.overlayRef.hasAttached) {
        this.showCalendar = false;
        this.overlayRef.detach();
      }
    }
  }

  @Input() label: string;
  @Input() type: string;
  @Input() endOfDay: boolean;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() language: string;
  @Input() invalidError: string;
  @Input() validateErrors: {};
  @Input() required: boolean;
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() calendarHeight: number = 300;
  @Input() calendarWidth: number = this.el.nativeElement.offsetWidth;
  @Input('la-datepicker-position') position: string = 'bottom';

  @Input()
  get value(): Date {
    if (this.endOfDay === true) {
      return this._value.endOf('day').toDate();
    }
    return this._value.toDate();
  }
  set value(val: Date) {
    this.date = moment(val);
    this._value = moment(val).startOf('day');
    this.onChange(this.value);
    this.onTouched();
  }
  private _value: moment_.Moment = moment().startOf('day');

  private overlayRef: OverlayRef;

  @Output() change = new EventEmitter<Date>();
  @Output() selectDate = new EventEmitter<Date>();

  showCalendar: boolean;
  date: moment_.Moment = moment();

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(private el: ElementRef,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private overlay: Overlay) { 
    this.type = 'calendar';
    this.showCalendar = false;
  }

  ngOnInit() {
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

  ngOnChanges() {
    this.change.emit(this.value);
  }

  writeValue(value: Date | null): void {
    if (value) {
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

  parseDate(dateString: string): moment_.Moment {
    if (dateString) {
      return moment(dateString.replace( /(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
    } else {
      return null;
    }
  }

  onShowCalendar() {
    if (this.disabled) {
      return;
    }

    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      const tooltipPortal = new ComponentPortal(LaCalendarComponent);
      const tooltipRef: ComponentRef<LaCalendarComponent> = this.overlayRef.attach(tooltipPortal);
      tooltipRef.instance.language = this.language;
      tooltipRef.instance.calendarHeight = this.calendarHeight;
      tooltipRef.instance.calendarWidth = this.calendarWidth;
      tooltipRef.instance.writeValue(this.value);
      tooltipRef.instance.selectDate.subscribe(date => {
        this.value = date;
        this.overlayRef.detach();
      });
    }
  }

  onSelsctDate(event: Date) {
    this.value = event;
    this.selectDate.emit(this.value);
  }

  isInvalid() {
    return this.invalidError !== null;
  }

  getValidationErr() {
    return this.invalidError;
  }

}
