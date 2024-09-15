import { TestBed } from '@angular/core/testing';

import { ManageQuizsService } from './manage-quizs.service';

describe('ManageQuizsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageQuizsService = TestBed.get(ManageQuizsService);
    expect(service).toBeTruthy();
  });
});
