import { TestBed } from '@angular/core/testing';

import { NgLaService } from './ng-la.service';

describe('NgLaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLaService = TestBed.get(NgLaService);
    expect(service).toBeTruthy();
  });
});
