import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LaDev';
  textExample = 'Text For Example';
  numberExample: number;
  textEmptyExample = '';
  validateErrors = {
    'required': 'שדה חובה'
  };
  gender: number;
  done: boolean;
  date: Date;
  date2: Date;

  constructor() { }

  ngOnInit(): void {
    this.numberExample = 0;
    // this.gender = 1;
    this.done = true;
    this.date = new Date('2019-10-13');
    this.date2 = new Date('2019-10-03');
  }

  getGenderDataSource() {
    return [
      { label: 'male', value: 1},
      { label: 'female', value: 2},
      { label: 'trans', value: 3}
    ]
  }
}
