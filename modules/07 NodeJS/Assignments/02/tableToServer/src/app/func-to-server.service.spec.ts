import { TestBed } from '@angular/core/testing';

import { FuncToServerService } from './func-to-server.service';

describe('FuncToServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncToServerService = TestBed.get(FuncToServerService);
    expect(service).toBeTruthy();
  });
});
