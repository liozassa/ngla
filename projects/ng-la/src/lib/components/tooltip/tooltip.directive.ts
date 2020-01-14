import { Directive, Input, HostListener, OnInit, ComponentRef, ElementRef } from '@angular/core';
import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LaTooltipComponent } from './tooltip.component';

@Directive({
  selector: '[laTooltip]'
})
export class LaTooltipDirective implements OnInit {

  private overlayRef: OverlayRef;

  constructor(private overlayPositionBuilder: OverlayPositionBuilder,
              private el: ElementRef,
              private overlay: Overlay) {}

  ngOnInit(): void {
    console.log('position', this.position);

    const positionStrategy = this.overlayPositionBuilder
    .flexibleConnectedTo(this.el)
    .withPositions([{
      originX: (this.position === 'top') || (this.position === 'bottom') ? 'center' : this.position === 'left' ? 'start' : 'end',
      originY: (this.position === 'left') || (this.position === 'right') ? 'center' : this.position === 'top' ? 'top' : 'bottom',
      overlayX: (this.position === 'top') || (this.position === 'bottom') ? 'center' : this.position === 'left' ? 'end' : 'start',
      overlayY: (this.position === 'left') || (this.position === 'right') ? 'center' : this.position === 'top' ? 'bottom' : 'top',
      offsetX: this.position === 'right' ? 7 : this.position === 'left' ? -7 : 0,
      offsetY: this.position === 'bottom' ? 7 : this.position === 'top' ? -7 : 0
    }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @Input('laTooltip') text = '';
  @Input('laTooltip-position') position = 'top';

  @HostListener('mouseenter')
  show() {
    const tooltipPortal = new ComponentPortal(LaTooltipComponent);
    const tooltipRef: ComponentRef<LaTooltipComponent> = this.overlayRef.attach(tooltipPortal);
    tooltipRef.instance.text = this.text;
    tooltipRef.instance.position = this.position;
  }

  @HostListener('mouseleave')
  hide() {
    this.overlayRef.detach();
   }
}
