import { TestBed } from '@angular/core/testing';

import { CreditcardService } from './creditcard.service';

describe('CreditcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditcardService = TestBed.get(CreditcardService);
    expect(service).toBeTruthy();
  });
});
