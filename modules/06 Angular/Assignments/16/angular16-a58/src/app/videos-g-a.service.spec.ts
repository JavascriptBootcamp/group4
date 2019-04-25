import { TestBed } from '@angular/core/testing';

import { VideosGAService } from './videos-g-a.service';

describe('VideosGAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideosGAService = TestBed.get(VideosGAService);
    expect(service).toBeTruthy();
  });
});
