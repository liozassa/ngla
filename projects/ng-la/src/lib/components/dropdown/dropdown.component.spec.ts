import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaDropdownComponent } from './dropdown.component';

describe('LaDropdownComponent', () => {
  let component: LaDropdownComponent;
  let fixture: ComponentFixture<LaDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
