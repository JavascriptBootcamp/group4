import { TestBed } from '@angular/core/testing';

import { ManageQuestionsService } from './manage-questions.service';

describe('ManageQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageQuestionsService = TestBed.get(ManageQuestionsService);
    expect(service).toBeTruthy();
  });
});
