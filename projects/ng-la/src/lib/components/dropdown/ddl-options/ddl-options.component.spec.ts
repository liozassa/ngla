import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaDdlOptionsComponent } from './ddl-options.component';

describe('LaDdlOptionsComponent', () => {
  let component: LaDdlOptionsComponent;
  let fixture: ComponentFixture<LaDdlOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaDdlOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaDdlOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
