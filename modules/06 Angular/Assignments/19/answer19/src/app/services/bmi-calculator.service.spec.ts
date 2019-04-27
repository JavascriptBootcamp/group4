import { TestBed } from '@angular/core/testing';

import { BmiCalculatorService } from './bmi-calculator.service';

describe('BmiCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmiCalculatorService = TestBed.get(BmiCalculatorService);
    expect(service).toBeTruthy();
  });
});
