import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[laInput]',
  host: {
    '[class.la-input]': 'true'
  }
})
export class LaInputDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.border = '1px solid black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = 'none';
  }

  ngOnInit() {
  }
}
