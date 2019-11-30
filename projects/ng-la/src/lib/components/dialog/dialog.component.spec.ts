import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaDialogComponent } from './dialog.component';

describe('LaDialogComponent', () => {
  let component: LaDialogComponent;
  let fixture: ComponentFixture<LaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
