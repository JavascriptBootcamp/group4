import { TestBed } from '@angular/core/testing';

import { MainGalleryService } from './main-gallery.service';

describe('MainGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainGalleryService = TestBed.get(MainGalleryService);
    expect(service).toBeTruthy();
  });
});
