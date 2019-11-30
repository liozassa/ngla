import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  textEmptyExample2 = '';
  validateErrors = {
    'required': 'שדה חובה'
  };
  gender: number;
  done: boolean;
  date: Date;
  date2: Date;
  showOkDialog: boolean;
  showYesNoDialog: boolean;

  persons = [
    {
      name: 'person1',
      age: 1,
      phone: '050-1234567'
    },
    {
      name: 'person2',
      age: 2,
      phone: '050-1234567'
    }
  ];

  submitted = false;
  dialogForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

  get f() { return this.dialogForm.controls; }

  constructor() { }

  ngOnInit(): void {
    this.submitted = true;
    this.numberExample = 0;
    // this.gender = 1;
    this.done = true;
    this.showOkDialog = false;
    this.showYesNoDialog = false;
    this.date = new Date('2019-10-13');
    this.date2 = new Date('2019-10-03');
  }

  getInvalidMsg(formControlName: string): string {
    switch (formControlName) {
      case 'firstName':
        if (this.f.firstName.errors) {
          if (this.f.firstName.errors.required) {
            return 'Name is required';
          } else if (this.f.firstName.errors.minlength) {
            return 'Name must be at least 2 characters';
          } else if (this.f.firstName.errors.maxlength) {
            return 'Name must be less than 30 characters';
          }
        }
        break;

      case 'lastName':
        if (this.f.lastName.errors) {
          if (this.f.lastName.errors.required) {
            return 'Name is required';
          }
        }
        break;
    
      default:
        break;
    }
  }

  getGenderDataSource() {
    return [
      { label: 'male', value: 1},
      { label: 'female', value: 2},
      { label: 'trans', value: 3}
    ]
  }

  addPerson() {
    const person = {
      name: 'person' + (this.persons.length + 1),
      age: (this.persons.length + 1),
      phone: '050-1234567'
    };

    this.persons.push(person);
  }

  onSubmit() {
    console.log('onSubmit');
  }
}
