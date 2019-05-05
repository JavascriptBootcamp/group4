import { TestBed } from '@angular/core/testing';

import { ManageDataService } from './manage-data.service';

describe('ManageDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageDataService = TestBed.get(ManageDataService);
    expect(service).toBeTruthy();
  });
});
