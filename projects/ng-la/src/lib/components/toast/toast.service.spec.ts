import { TestBed } from '@angular/core/testing';

import { LaToastService } from './toast.service';

describe('LaToastService', () => {
  let service: LaToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
