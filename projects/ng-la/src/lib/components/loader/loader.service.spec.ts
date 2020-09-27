import { TestBed } from '@angular/core/testing';

import { LaLoaderService } from './loader.service';

describe('LaLoaderService', () => {
  let service: LaLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
