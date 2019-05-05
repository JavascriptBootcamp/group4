import { TestBed } from '@angular/core/testing';

import { ShoppingTableService } from './shopping-table.service';

describe('ShoppingTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingTableService = TestBed.get(ShoppingTableService);
    expect(service).toBeTruthy();
  });
});
