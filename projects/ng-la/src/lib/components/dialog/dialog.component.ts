import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'la-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class LaDialogComponent implements OnInit {

  @Input() open: boolean;
  @Input() header: string;
  
  @Input()
  get laStyle(): object {
    return this._laStyle;
  };
  set laStyle(val: object) {
    Object.keys(val).map(
      propNmae => {
        this._laStyle[propNmae] = val[propNmae];
      }
    );
  }
  private _laStyle: Object;

  constructor() { 
    this._laStyle = {
      height: '500px',
      width: '500px'
    };
  }

  ngOnInit() {

  }

  closeDialog() {
    this.open = false;
  }

}
