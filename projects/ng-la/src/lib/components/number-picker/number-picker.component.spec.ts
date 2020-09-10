import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaNumberPickerComponent } from './number-picker.component';

describe('LaNumberPickerComponent', () => {
  let component: LaNumberPickerComponent;
  let fixture: ComponentFixture<LaNumberPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaNumberPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaNumberPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
