import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSwitchbuttonComponent } from './switchbutton.component';

describe('LaSwitchbuttonComponent', () => {
  let component: LaSwitchbuttonComponent;
  let fixture: ComponentFixture<LaSwitchbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaSwitchbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSwitchbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
