import { Injectable, ComponentRef, ElementRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LaDdlOptionsOverlayRef } from './ddl-options-overlay-ref.';
import { LaDdlOptionsComponent } from './ddl-options/ddl-options.component';
import { LaSelectItem } from '../../common/models';
import { UtilsService } from '../../services/utils.service';

interface DdlOptionsDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: DdlOptionsDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
}

@Injectable({
  providedIn: 'root'
})
export class DdlOptionsOverlayService {

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder) { }

  open(el: ElementRef, direction: "rtl" | "ltr", position: string, showFilter: boolean, autoSearch: boolean, search_placeholder: string, options: LaSelectItem[], optionHeight: number, config: DdlOptionsDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(el, position, dialogConfig);
    overlayRef.setDirection(direction);
    const dialogRef = new LaDdlOptionsOverlayRef(overlayRef);
    const ddl_options_portal = new ComponentPortal(LaDdlOptionsComponent);
    const ddl_options: ComponentRef<LaDdlOptionsComponent> = overlayRef.attach(ddl_options_portal);
    ddl_options.instance.options = options;
    ddl_options.instance.optionHeight = optionHeight;
    ddl_options.instance.optionWidth = el.nativeElement.offsetWidth;
    ddl_options.instance.showFilter = showFilter;
    ddl_options.instance.autoSearch = autoSearch;
    ddl_options.instance.search_placeholder = search_placeholder;
    ddl_options.instance.change.subscribe(option => {
      dialogRef.onChange(option.value);
    });
    overlayRef.backdropClick().subscribe(_ => dialogRef.onClose());
    return dialogRef;
  }

  private createOverlay(el: ElementRef, position: string, config: DdlOptionsDialogConfig) {
    const overlayConfig = this.getOverlayConfig(el, position, config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(el: ElementRef, position: string, config: DdlOptionsDialogConfig): OverlayConfig {
    const positionStrategy = this.overlayPositionBuilder
    .flexibleConnectedTo(el)
    .withPositions([{
      originX: (position === 'top') || (position === 'bottom') ? 'center' : position === 'left' ? 'start' : 'end',
      originY: (position === 'left') || (position === 'right') ? 'center' : position === 'top' ? 'top' : 'bottom',
      overlayX: (position === 'top') || (position === 'bottom') ? 'center' : position === 'left' ? 'end' : 'start',
      overlayY: (position === 'left') || (position === 'right') ? 'center' : position === 'top' ? 'bottom' : 'top'
    }]);

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
