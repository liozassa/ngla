import { OverlayRef } from '@angular/cdk/overlay';

export class LaLoaderRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}