import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCardComponent } from './card.component';

describe('LaCardComponent', () => {
  let component: LaCardComponent;
  let fixture: ComponentFixture<LaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
