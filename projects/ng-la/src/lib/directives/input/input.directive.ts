import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[laInput]',
  host: {
    '[class.la-input]': 'true'
  }
})
export class LaInputDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
}
