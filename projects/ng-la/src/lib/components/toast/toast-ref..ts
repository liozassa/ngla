import { OverlayRef } from '@angular/cdk/overlay';

export class LaToastRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }

  isVisible() {
    return this.overlayRef && this.overlayRef.overlayElement;
  }

  getPosition() {
    return this.overlayRef.overlayElement.getBoundingClientRect();
  }
}