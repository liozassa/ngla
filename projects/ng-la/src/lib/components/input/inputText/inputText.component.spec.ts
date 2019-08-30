import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaInputTextComponent } from './inputText.component';

describe('LaInputTextComponent', () => {
  let component: LaInputTextComponent;
  let fixture: ComponentFixture<LaInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
