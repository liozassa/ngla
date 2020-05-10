import { Component, Input, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { LaSelectItem } from '../../../common/models';
import { trigger, state, transition, style, useAnimation } from '@angular/animations';
import { transAnimation } from '../../../common/animations';

@Component({
  selector: 'la-ddl-options',
  templateUrl: './ddl-options.component.html',
  styleUrls: ['./ddl-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  /*animations: [
    trigger('ddl-options', [
      state('small',
        style({ height: '0px'})
      ),
      state('large',
        style({
          height: '{{optionHeight}}px',
          width: '{{optionWidth}}px'
        }),
        {
          params: {
            optionHeight: 150,
            optionWidth: 150
          }
        }
      ),
      transition('small <=> large',
        useAnimation(transAnimation, {
          delay: '.5s ease-in'
        })
      )
    ])
  ]*/
})
export class LaDdlOptionsComponent {
  
  @Input()
  get optinos() : LaSelectItem[] {
    return this._options;
  }
  set options(value: LaSelectItem[]) {
    this._filter_options = value;
    this._options = value;
  }
  private _options: LaSelectItem[];

  @Input() optionHeight: number = 150;
  @Input() optionWidth: number = 150;
  @Input() showFilter: boolean = false;

  _filter_options: LaSelectItem[];
  change = new EventEmitter();

  constructor() { }

  selectOption(option: LaSelectItem) {
    this.change.emit(option);
  }

  filterOptions(filter_value: string) {
    this._filter_options = this.optinos.filter(o => o.label.includes(filter_value));
  }
}
