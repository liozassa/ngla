import { OverlayRef } from '@angular/cdk/overlay';
import { Output, EventEmitter } from '@angular/core';

export class CalendarOverlayRef {

  @Output() select = new EventEmitter();

  constructor(private overlayRef: OverlayRef) { }

  selectDate(date: Date): void {
    this.select.emit(date);
    this.close();
  }

  close(): void {
    this.overlayRef.dispose();
  }
}