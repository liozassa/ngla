import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'la-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LaLoaderComponent implements OnInit {

  @Input() type: string = 'spinner';
  @Input() imageSrc: string = undefined;
  @Input() hasBackdrop: boolean = false;

  mode: string = 'hide';

  constructor() { }

  ngOnInit(): void {
    console.log('imageSrc', this.imageSrc);
   }

}
