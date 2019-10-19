import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'la-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class LaCardComponent implements OnInit {

  @Input() person: any;

  constructor() { }

  ngOnInit() {
  }

}