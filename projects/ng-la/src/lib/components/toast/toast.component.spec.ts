import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaToastComponent } from './toast.component';

describe('LaToastComponent', () => {
  let component: LaToastComponent;
  let fixture: ComponentFixture<LaToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
