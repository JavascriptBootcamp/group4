import { TestBed } from '@angular/core/testing';

import { ShirtsService } from './shirts.service';

describe('ShirtsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShirtsService = TestBed.get(ShirtsService);
    expect(service).toBeTruthy();
  });
});
