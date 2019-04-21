import { TestBed } from '@angular/core/testing';

import { BmiCalcService } from './bmi-calc.service';

describe('BmiCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmiCalcService = TestBed.get(BmiCalcService);
    expect(service).toBeTruthy();
  });
});
