import { TestBed } from '@angular/core/testing';

import { CalendarOverlayService } from './calendar-overlay.service';

describe('CalendarOverlayService', () => {
  let service: CalendarOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
