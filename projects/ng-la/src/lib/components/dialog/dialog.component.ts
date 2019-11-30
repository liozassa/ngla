import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'la-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class LaDialogComponent implements OnInit {

  @Output() ok: EventEmitter<any> = new EventEmitter();
  @Output() yes: EventEmitter<any> = new EventEmitter();
  @Output() no: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  @Input() open: boolean;
  @Input() header: string;
  @Input() laStyle: Object;
  @Input() buttons: string;
  @Input() okText: string;
  @Input() yesText: string;
  @Input() noText: string;
  @Input() cancelText: string;
  @Input() saveText: string;
  @Input() deleteText: string;

  constructor() { 
    this.laStyle = {
      height: '500px',
      width: '500px'
    };

    this.okText = 'OK';
    this.yesText = 'Yes';
    this.noText = 'No';
    this.cancelText = 'Cancel';
    this.saveText = 'Save';
    this.deleteText = 'Delete';
  }

  ngOnInit() {
    switch (this.buttons) {
      case 'ok':
        this.buttons = 'ok';
        break;
      case 'yes|cancel':
        this.buttons = 'yes|cancel';
        break;
        case 'yes|no':
          this.buttons = 'yes|no';
          break;
      case 'yes|no|cancel':
        this.buttons = 'yes|no|cancel';
        break;
      case 'save|cancel':
        this.buttons = 'save|cancel';
        break;
      case 'save|delete|cancel':
        this.buttons = 'save|delete|cancel';
        break;
      default:
        this.buttons = 'ok';
        break;
    }
  }

  onOK() {
    this.ok.emit();
  }

  onYes() {
    this.yes.emit();
  }

  onNo() {
    this.no.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  closeDialog() {
    this.open = false;
  }

}
