import { TestBed } from '@angular/core/testing';

import { ActionsService } from './actions.service';

describe('ActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionsService = TestBed.get(ActionsService);
    expect(service).toBeTruthy();
  });
});
