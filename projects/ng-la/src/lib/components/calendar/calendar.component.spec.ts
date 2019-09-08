import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCalendarComponent } from './calendar.component';

describe('LaCalendarComponent', () => {
  let component: LaCalendarComponent;
  let fixture: ComponentFixture<LaCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
