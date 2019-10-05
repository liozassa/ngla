import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaDatepickerComponent } from './datepicker.component';

describe('LaDatepickerComponent', () => {
  let component: LaDatepickerComponent;
  let fixture: ComponentFixture<LaDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
