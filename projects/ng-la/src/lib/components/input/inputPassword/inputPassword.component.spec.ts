import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaInputPasswordComponent } from './inputPassword.component';

describe('LaInputPasswordComponent', () => {
  let component: LaInputPasswordComponent;
  let fixture: ComponentFixture<LaInputPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaInputPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
