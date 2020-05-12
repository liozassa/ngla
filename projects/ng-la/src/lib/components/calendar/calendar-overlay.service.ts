import { Injectable, ComponentRef, ElementRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CalendarOverlayRef } from './calendar-overlay-ref.';
import { LaCalendarComponent } from '.';
import { UtilsService } from '../../services/utils.service';

interface CalendarDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: CalendarDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
}

@Injectable({
  providedIn: 'root'
})
export class CalendarOverlayService {

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private utilsService: UtilsService) { }

  open(el: ElementRef, position: string, date: Date, config: CalendarDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(el, position, dialogConfig);
    overlayRef.setDirection(this.utilsService.getDirection());
    const dialogRef = new CalendarOverlayRef(overlayRef);
    const calendar_portal = new ComponentPortal(LaCalendarComponent);
    const calendar: ComponentRef<LaCalendarComponent> = overlayRef.attach(calendar_portal);
    calendar.instance.value = date;
    calendar.instance.selectDate.subscribe((date: Date) => dialogRef.selectDate(date));
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());
    return dialogRef;
  }

  private createOverlay(el: ElementRef, position: string, config: CalendarDialogConfig) {
    const overlayConfig = this.getOverlayConfig(el, position, config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(el: ElementRef, position: string, config: CalendarDialogConfig): OverlayConfig {
    const positionStrategy = this.overlayPositionBuilder
    .flexibleConnectedTo(el)
    .withPositions([{
      originX: (position === 'top') || (position === 'bottom') ? 'center' : position === 'left' ? 'start' : 'end',
      originY: (position === 'left') || (position === 'right') ? 'center' : position === 'top' ? 'top' : 'bottom',
      overlayX: (position === 'top') || (position === 'bottom') ? 'center' : position === 'left' ? 'end' : 'start',
      overlayY: (position === 'left') || (position === 'right') ? 'center' : position === 'top' ? 'bottom' : 'top'
    }]);

    /*const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
      */

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
