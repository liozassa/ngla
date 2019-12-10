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
  gender2: number;
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
    gender: new FormControl('', Validators.required),
    gender2: new FormControl('', Validators.required)
  });

  get f() { return this.dialogForm.controls; }

  constructor() { }

  ngOnInit(): void {
    this.numberExample = 0;
    // this.gender = 1;
    this.done = true;
    this.showOkDialog = false;
    this.showYesNoDialog = false;
    this.date = new Date('2019-10-13');
    this.date2 = new Date('2019-10-03');
  }

  getInvalidMsg(formControlName: string): string {
    if (!this.submitted) {
      return null;
    }

    switch (formControlName) {
      case 'firstName':
        if (this.f.firstName.errors) {
          if (this.f.firstName.errors.required) {
            return 'First name is required';
          } else if (this.f.firstName.errors.minlength) {
            return 'First name must be at least 2 characters';
          } else if (this.f.firstName.errors.maxlength) {
            return 'First name must be less than 30 characters';
          }
        }
        break;

      case 'lastName':
        if (this.f.lastName.errors) {
          if (this.f.lastName.errors.required) {
            return 'Last name is required';
          }
        }
        break;

      case 'gender':
        if (this.f.gender.errors) {
          if (this.f.gender.errors.required) {
            return 'Gender is required';
          }
        }
        break;

      case 'gender2':
        if (this.f.gender2.errors) {
          if (this.f.gender2.errors.required) {
            return 'Gender is required';
          }
        }
        break;
    
      default:
        break;
    }
    return null;
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

  onSelectDate(event) {
    console.log('selsctDate', event);
  }

  onSubmit() {
    this.submitted = true;
    if (this.dialogForm.invalid) {
      return;
    }
    this.showOkDialog = false;
  }
}
