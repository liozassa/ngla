import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'la-overlay-panel',
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss']
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
