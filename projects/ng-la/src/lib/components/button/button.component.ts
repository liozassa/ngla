import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'la-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class LaButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: string;

  classes: string = '';

  constructor(private el: ElementRef) { 
    if (el.nativeElement.classList.contains('ok')) {
      this.classes = 'ok'
    } else if (el.nativeElement.classList.contains('yes')) {
      this.classes = 'yes'
    } else if (el.nativeElement.classList.contains('no')) {
      this.classes = 'no'
    } else if (el.nativeElement.classList.contains('cancel')) {
      this.classes = 'cancel'
    } else if (el.nativeElement.classList.contains('save')) {
      this.classes = 'save'
    } else if (el.nativeElement.classList.contains('delete')) {
      this.classes = 'delete'
    }
  }

  ngOnInit() {
  }

}
