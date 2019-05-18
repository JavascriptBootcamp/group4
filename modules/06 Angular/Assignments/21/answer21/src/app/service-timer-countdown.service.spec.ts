import { TestBed } from '@angular/core/testing';

import { ServiceTimerCountdownService } from './service-timer-countdown.service';

describe('ServiceTimerCountdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTimerCountdownService = TestBed.get(ServiceTimerCountdownService);
    expect(service).toBeTruthy();
  });
});
