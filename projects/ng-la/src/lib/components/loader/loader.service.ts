import { Injectable, ComponentRef, ElementRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { LaLoaderComponent } from './loader.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { LaLoaderRef } from './loader-ref.';

interface CreateLoaderDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: CreateLoaderDialogConfig = {
  hasBackdrop: false,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
}

@Injectable({
  providedIn: 'root'
})
export class LaLoaderService {

  create_loader: ComponentRef<LaLoaderComponent> = null;

  constructor(private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder) { }

  show(el: ElementRef, imageSrc: string, config: CreateLoaderDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(el, dialogConfig);
    const dialogRef = new LaLoaderRef(overlayRef);
    const create_loader_portal = new ComponentPortal(LaLoaderComponent);
    this.create_loader = overlayRef.attach(create_loader_portal);
    this.create_loader.instance.mode = 'show';
    this.create_loader.instance.hasBackdrop = dialogConfig.hasBackdrop;
    this.create_loader.instance.imageSrc = imageSrc;
    return dialogRef;
  }

  hide() {
    this.create_loader.instance.mode = 'hide';
  }

  private createOverlay(el: ElementRef, config: CreateLoaderDialogConfig) {
    const overlayConfig = this.getOverlayConfig(el, config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(el: ElementRef, config: CreateLoaderDialogConfig): OverlayConfig {
    const positionStrategy = this.overlayPositionBuilder
    .flexibleConnectedTo(el)
    .withPositions([{
      originX: 'center',
      originY: 'center',
      overlayX: 'center',
      overlayY: 'center'
    }]);
    
    /*const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();*/

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}
