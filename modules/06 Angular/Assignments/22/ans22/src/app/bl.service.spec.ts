import { TestBed } from '@angular/core/testing';

import { BlService } from './bl.service';

describe('BlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlService = TestBed.get(BlService);
    expect(service).toBeTruthy();
  });
});
