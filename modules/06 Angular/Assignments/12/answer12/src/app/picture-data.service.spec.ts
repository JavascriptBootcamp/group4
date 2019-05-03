import { TestBed } from '@angular/core/testing';

import { PictureDataService } from './picture-data.service';

describe('PictureDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PictureDataService = TestBed.get(PictureDataService);
    expect(service).toBeTruthy();
  });
});
