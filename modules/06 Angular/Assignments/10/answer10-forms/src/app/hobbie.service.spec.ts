import { TestBed } from '@angular/core/testing';

import { HobbieService } from './hobbie.service';

describe('HobbieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HobbieService = TestBed.get(HobbieService);
    expect(service).toBeTruthy();
  });
});
