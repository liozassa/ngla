import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaListBoxComponent } from './listbox.component';

describe('LaListBoxComponent', () => {
  let component: LaListBoxComponent;
  let fixture: ComponentFixture<LaListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
