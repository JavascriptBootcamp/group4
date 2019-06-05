import { TestBed } from '@angular/core/testing';

import { AppHelperService } from './app-helper.service';

describe('AppHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppHelperService = TestBed.get(AppHelperService);
    expect(service).toBeTruthy();
  });
});
