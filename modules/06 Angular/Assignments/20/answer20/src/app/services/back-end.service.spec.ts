import { TestBed } from '@angular/core/testing';

import { BackEndService } from './back-end.service';

describe('BackEndService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackEndService = TestBed.get(BackEndService);
    expect(service).toBeTruthy();
  });
});
