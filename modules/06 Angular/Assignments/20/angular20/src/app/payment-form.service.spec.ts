import { TestBed } from '@angular/core/testing';

import { PaymentFormService } from './payment-form.service';

describe('PaymentFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentFormService = TestBed.get(PaymentFormService);
    expect(service).toBeTruthy();
  });
});
