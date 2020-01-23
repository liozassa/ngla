import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaOverlayPanelComponent } from './overlay-panel.component';

describe('LaOverlayPanelComponent', () => {
  let component: LaOverlayPanelComponent;
  let fixture: ComponentFixture<LaOverlayPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaOverlayPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaOverlayPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
