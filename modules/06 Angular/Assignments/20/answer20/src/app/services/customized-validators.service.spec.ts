import { TestBed } from '@angular/core/testing';

import { CustomizedValidatorsService } from './customized-validators.service';

describe('CustomizedValidatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomizedValidatorsService = TestBed.get(CustomizedValidatorsService);
    expect(service).toBeTruthy();
  });
});
