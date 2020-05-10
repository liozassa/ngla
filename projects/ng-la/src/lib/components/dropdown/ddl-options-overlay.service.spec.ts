import { TestBed } from '@angular/core/testing';

import { DdlOptionsOverlayService } from './ddl-options-overlay.service';

describe('DdlOptionsOverlayService', () => {
  let service: DdlOptionsOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdlOptionsOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
