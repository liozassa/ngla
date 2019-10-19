import { Component, OnInit, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'la-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss']
})
export class LaListBoxComponent implements OnInit {

  @Input() header: string;
  @Input() footer: any;

  constructor() { }

  ngOnInit() {
  }

}
