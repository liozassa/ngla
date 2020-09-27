import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLoaderComponent } from './loader.component';

describe('LaLoaderComponent', () => {
  let component: LaLoaderComponent;
  let fixture: ComponentFixture<LaLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
