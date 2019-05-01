import { TestBed } from '@angular/core/testing';

import { CardDataAndActionsManagementService } from './card-data-and-actions-management.service';

describe('CardDataAndActionsManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardDataAndActionsManagementService = TestBed.get(CardDataAndActionsManagementService);
    expect(service).toBeTruthy();
  });
});
