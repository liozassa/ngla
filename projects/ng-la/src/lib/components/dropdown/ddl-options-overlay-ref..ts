import { OverlayRef } from '@angular/cdk/overlay';
import { Output, EventEmitter } from '@angular/core';
import { LaSelectItem } from '../../common/models';

export class LaDdlOptionsOverlayRef {

  @Output() select = new EventEmitter();
  @Output() close = new EventEmitter();

  constructor(private overlayRef: OverlayRef) { }

  onChange(options: LaSelectItem): void {
    this.select.emit(options);
    this.onClose();
  }

  onClose(): void {
    this.close.emit();
    this.overlayRef.dispose();
  }
}