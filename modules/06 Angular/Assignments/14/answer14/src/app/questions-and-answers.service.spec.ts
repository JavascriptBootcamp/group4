import { TestBed } from '@angular/core/testing';

import { QuestionsAndAnswersService } from './questions-and-answers.service';

describe('QuestionsAndAnswersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionsAndAnswersService = TestBed.get(QuestionsAndAnswersService);
    expect(service).toBeTruthy();
  });
});
