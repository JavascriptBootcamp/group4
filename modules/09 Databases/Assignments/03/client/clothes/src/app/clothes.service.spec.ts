import { TestBed } from '@angular/core/testing';

import { ClothesService } from './clothes.service';

describe('ClothesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClothesService = TestBed.get(ClothesService);
    expect(service).toBeTruthy();
  });
});
