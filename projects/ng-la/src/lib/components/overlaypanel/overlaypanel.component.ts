import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'la-overlaypanel',
  templateUrl: './overlaypanel.component.html',
  styleUrls: ['./overlaypanel.component.scss']
})
export class LaOverlayPanelComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: string;
  @Input() form: boolean = false;

  classes: string = '';

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
  }

}
