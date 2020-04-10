import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { trigger, transition, style, useAnimation } from '@angular/animations';
import { transAnimation } from '../../common/animations';

@Component({
  selector: 'la-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        useAnimation(transAnimation, {
          delay: 300,
          params: { 
            opacity: 1
          }
        })
      ]),
      transition(':leave', [
        useAnimation(transAnimation, {
          delay: 300,
          params: { 
            opacity: 0
          }
        })
      ]),
    ]),
  ]
})
export class LaTooltipComponent {
  
  @Input() text: string = '';

  @Input() position: string = 'top';

  constructor() { }

}
