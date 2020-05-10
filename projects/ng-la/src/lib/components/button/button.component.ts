import { Component, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'la-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaButtonComponent {
  @Input() label: string;
  @Input() disabled: string;
  @Input() form: boolean = false;

  classes: string = '';

  constructor(private el: ElementRef) { 
    if (el.nativeElement.classList.contains('la-button-secondary')) {
      this.classes = 'la-button-secondary'
    } else if (el.nativeElement.classList.contains('la-button-success')) {
      this.classes = 'la-button-success'
    } else if (el.nativeElement.classList.contains('la-button-info')) {
      this.classes = 'la-button-info'
    } else if (el.nativeElement.classList.contains('la-button-warning')) {
      this.classes = 'la-button-warning'
    } else if (el.nativeElement.classList.contains('la-button-danger')) {
      this.classes = 'la-button-danger'
    } else if (el.nativeElement.classList.contains('la-button-flat')) {
      this.classes = 'la-button-flat'
    }
  }

}
