import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'la-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class LaToastComponent implements OnInit {

  mode: string = 'hide';

  @Input() type: string;
  @Input() auto_hide: boolean;
  @Input() auto_hide_interval: number;
  @Input() show_close: boolean;
  @Input() message: string;

  @Output() hide = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.auto_hide) {
      setInterval(() => {
        this.onHide();
      }, this.auto_hide_interval);
    }
  }

  onHide() {
    this.mode = 'hide';
    setInterval(() => {
      this.hide.emit();
    }, 2500);
  }

}
