import { Component, ElementRef, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LaLoaderRef } from 'projects/ng-la/src/lib/components/loader/loader-ref.';
import { LaLoaderService } from 'projects/ng-la/src/lib/components/loader/loader.service';
import { UtilsService } from 'projects/ng-la/src/lib/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LaDev';
  textExample = 'Text For Example';
  textExample2: string;
  textExample3 = 'Text For Example2';
  numberExample: number;
  passwordExample: string = '1234';
  textEmptyExample = '';
  textEmptyExample2 = '';
  validateErrors = {
    'required': 'שדה חובה'
  };
  
  gender: number[] = [1];
  gender2: number;
  done: boolean;
  number: Number = 2020;
  date: Date;
  date2: Date;
  date3: Date;
  date4: Date;
  showOkDialog: boolean;
  showYesNoDialog: boolean;
  dialogRef: LaLoaderRef;

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
    },
    {
      name: 'person3',
      age: 3,
      phone: '050-1234567'
    }
  ];

  persons2 = [
    {
      name: 'person1',
      age: 1,
      phone: '050-1234567'
    },
    {
      name: 'person2',
      age: 2,
      phone: '050-1234567'
    },
    {
      name: 'person3',
      age: 3,
      phone: '050-1234567'
    },
    {
      name: 'person4',
      age: 4,
      phone: '050-1234567'
    },
    {
      name: 'person5',
      age: 5,
      phone: '050-1234567'
    }
  ];

  submitted = false;
  dialogForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    gender2: ['', Validators.required],
    date: [{ value: '' }, Validators.required],
    numberExample: ['', Validators.required],
    done: ['', Validators.required]
  });

  get f() { return this.dialogForm.controls; }

  constructor(private utilsService: UtilsService,
              private fb: FormBuilder,
              private loaderService: LaLoaderService,
              private el: ElementRef) { }

  ngOnInit(): void {
    this.dialogRef = this.loaderService.show(this.el, "/assets/icons/ico_loader.svg");
    /*setInterval(() => {
      this.dialogRef.close();
    }, 5000);*/

    //this.dialogForm.controls.date.disable();
    this.numberExample = 0;
    // this.gender = 1;
    this.done = true;
    this.showOkDialog = false;
    this.showYesNoDialog = false;
    this.date = new Date('2019-10-13');
    this.date2 = new Date('2019-10-03');
    this.date3 = new Date('2016-02-13');
    this.date4 = new Date('2018-02-23');

    /*this.dialogForm.patchValue({
      gender: this.gender
    });*/

    this.dialogForm.get('done').valueChanges.subscribe(val => {
      console.log('done', val);
      if (val) {
        this.dialogForm.controls.numberExample.enable();
      } else {
        this.dialogForm.controls.numberExample.disable();
      }
    });

    
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
      { label: 'trans', value: 3},
      { label: 'gay', value: 4},
      { label: 'lesbian', value: 5}
    ]
  }

  addPerson() {
    const person = {
      name: 'person' + (this.persons.length + 1),
      age: (this.persons.length + 1),
      phone: '050-1234567'
    };

    this.persons.push(person);
    if (this.persons.length < 5) {
      this.done = false;
    }else if (this.persons.length > 5 && this.persons.length < 8) {
      this.done = true;
    } else {
      this.done = false;
    }
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

  isRTL() {
    return this.utilsService.isRTL();
  }

  onSearch(search_value: string) {
    console.log('search_value', search_value);
  }
}
