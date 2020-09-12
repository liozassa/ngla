import { Component, OnInit, ContentChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'la-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss']
})
export class LaListBoxComponent implements OnInit {

  @Input() header: string;
  @Input() footer: any;
  @Input() showAddButton: boolean;

  @Output() addItem: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.showAddButton = false;
  }

  ngOnInit() { }

  add() {
    if (this.showAddButton) {
      this.addItem.emit();
    }
  }

}
