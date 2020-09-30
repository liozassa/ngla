import { Injectable, ComponentRef, Inject } from '@angular/core';
import { Overlay, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LaToastRef } from './toast-ref.';
import { LaToastComponent } from './toast.component';

class LaToastData {
  type: ToastType;
  message: string;
  auto_hide?: boolean;
  auto_hide_interval?: number;
  show_close?: boolean;
  rtl?: boolean;
}

const defaultToastData: LaToastData = {
  type: 'info',
  message: 'Not enter a message',
  auto_hide: true,
  auto_hide_interval: 5000,
  show_close: true,
  rtl: false
}

type ToastType = 'error' | 'warn' | 'info' | 'success';

interface ILaToastConfig {
  position?: {
      top: number;
      right: number;
  },
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const defaultToastConfig: ILaToastConfig = {
  position: {
      top: 60,
      right: 20,
  },
  hasBackdrop: false,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
};




@Injectable({
  providedIn: 'root'
})
export class LaToastService {
  private last_toast: LaToastRef;
  private rtl = false;

  create_toast: ComponentRef<LaToastComponent> = null;

  constructor(private overlay: Overlay) { }

  show(data: LaToastData, config: ILaToastConfig = {}) {
    const toastConfig = { ...defaultToastConfig, ...config };
    const toastData = { ...defaultToastData, ...data };
    //const overlayRef = this.createOverlay();
    const positionStrategy = this.getPositionStrategy(toastConfig);
    const overlayRef = this.overlay.create({ positionStrategy });
    const toastRef = new LaToastRef(overlayRef);
    this.last_toast = toastRef;

    const create_toast_portal = new ComponentPortal(LaToastComponent);
    this.create_toast = overlayRef.attach(create_toast_portal);
    this.rtl = toastData.rtl;
    this.create_toast.instance.mode = 'show';
    this.create_toast.instance.type = toastData.type;
    this.create_toast.instance.auto_hide = toastData.auto_hide;
    this.create_toast.instance.auto_hide_interval = toastData.auto_hide_interval;
    this.create_toast.instance.show_close = toastData.show_close;
    this.create_toast.instance.message = toastData.message;
    this.create_toast.instance.hide.subscribe(_ => {
      toastRef.close();
    });
    return toastRef;
  }

  hide() {
    this.create_toast.instance.mode = 'hide';
  }

  /*private createOverlay() {
    const positionStrategy = this.getPositionStrategy();
    return this.overlay.create({ positionStrategy });
  }*/

  private getPositionStrategy(config: ILaToastConfig): GlobalPositionStrategy {
    let positionStrategy = null;
    if (this.rtl) {
      positionStrategy = this.overlay.position()
      .global()
      .left(config.position.right + 'px')
      .top(this.getPosition(config));
    } else {
      positionStrategy = this.overlay.position()
      .global()
      .right(config.position.right + 'px')
      .top(this.getPosition(config));
    }
    return positionStrategy;

    /*const overlayConfig = new OverlayConfig({
      hasBackdrop: this.toastConfig.hasBackdrop,
      backdropClass: this.toastConfig.backdropClass,
      panelClass: this.toastConfig.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });*/

    //return overlayConfig;
  }

  getPosition(config: ILaToastConfig) {
    const lastToastIsVisible = this.last_toast && this.last_toast.isVisible();
    const position = lastToastIsVisible 
      ? this.last_toast.getPosition().bottom
      : config.position.top;
    return position + 'px';
  }
}
