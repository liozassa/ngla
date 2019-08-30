import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaInputNumberComponent } from './inputNumber.component';

describe('LaInputNumberComponent', () => {
  let component: LaInputNumberComponent;
  let fixture: ComponentFixture<LaInputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaInputNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
