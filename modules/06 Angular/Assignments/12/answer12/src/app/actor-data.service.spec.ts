import { TestBed } from '@angular/core/testing';

import { ActorDataService } from './actor-data.service';

describe('ActorDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActorDataService = TestBed.get(ActorDataService);
    expect(service).toBeTruthy();
  });
});
