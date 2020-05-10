import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaInputSearchComponent } from './inputSearch.component';

describe('LaInputSearchComponent', () => {
  let component: LaInputSearchComponent;
  let fixture: ComponentFixture<LaInputSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaInputSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaInputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
