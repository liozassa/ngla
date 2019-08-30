import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLaComponent } from './ng-la.component';

describe('NgLaComponent', () => {
  let component: NgLaComponent;
  let fixture: ComponentFixture<NgLaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
