import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSelectbuttonComponent } from './selectbutton.component';

describe('LaSelectbuttonComponent', () => {
  let component: LaSelectbuttonComponent;
  let fixture: ComponentFixture<LaSelectbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaSelectbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSelectbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
