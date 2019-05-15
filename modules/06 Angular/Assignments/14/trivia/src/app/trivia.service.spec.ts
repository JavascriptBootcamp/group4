import { TestBed } from '@angular/core/testing';

import { TriviaService } from './trivia.service';

describe('TriviaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriviaService = TestBed.get(TriviaService);
    expect(service).toBeTruthy();
  });
});
