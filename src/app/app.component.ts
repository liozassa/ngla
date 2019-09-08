import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LaDev';
  textExample = 'Text For Example';
  numberExample: number = 0;
  textEmptyExample = '';
  validateErrors = {
    'required': 'שדה חובה'
  };
  gender: number;

  getGenderDataSource() {
    return [
      { label: 'male', value: 1},
      { label: 'female', value: 2}
    ]
  }
}
