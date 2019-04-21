import { TestBed } from '@angular/core/testing';

import { BmiCalculator } from './BmiCalculator.service';

describe('BmiCalculator', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmiCalculator = TestBed.get(BmiCalculator);
    expect(service).toBeTruthy();
  });
});
