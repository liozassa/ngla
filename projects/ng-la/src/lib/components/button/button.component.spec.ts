import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaButtonComponent } from './button.component';

describe('LaButtonComponent', () => {
  let component: LaButtonComponent;
  let fixture: ComponentFixture<LaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
