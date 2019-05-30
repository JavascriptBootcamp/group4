import { TestBed } from '@angular/core/testing';

import { SeviceToServerService } from './sevice-to-server.service';

describe('SeviceToServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeviceToServerService = TestBed.get(SeviceToServerService);
    expect(service).toBeTruthy();
  });
});
