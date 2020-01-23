import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { LaSelectItem } from '../../../common/models';

@Component({
  selector: 'la-ddl-options',
  templateUrl: './ddl-options.component.html',
  styleUrls: ['./ddl-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('ddl-options', [
      state('small', style({ height: '0px'})),
      state('large', style({ height: '{{optionHeight}}px', width: '{{optionWidth}}px'}), {params: {optionHeight: 150, optionWidth: 150}}),
      transition('small <=> large', animate('.5s ease-in'))
    ])
  ]
})
export class LaDdlOptionsComponent implements OnInit {
  
  @Input() options: LaSelectItem[];
  @Input() state: string = 'small';
  @Input() optionHeight: number = 150;
  @Input() optionWidth: number = 150;

  change = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  selectOption(option: LaSelectItem) {
    this.change.emit(option);
    this.state = 'small';
  }

}
