import { TestBed } from '@angular/core/testing';

import { InstushService } from './instush.service';

describe('InstushService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstushService = TestBed.get(InstushService);
    expect(service).toBeTruthy();
  });
});
