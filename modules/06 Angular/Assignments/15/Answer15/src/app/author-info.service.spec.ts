import { TestBed } from '@angular/core/testing';

import { AuthorInfoService } from './author-info.service';

describe('AuthorInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorInfoService = TestBed.get(AuthorInfoService);
    expect(service).toBeTruthy();
  });
});
