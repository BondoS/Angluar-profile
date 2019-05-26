import { TestBed } from '@angular/core/testing';

import { DashItemsService } from './dash-items.service';

describe('DashItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashItemsService = TestBed.get(DashItemsService);
    expect(service).toBeTruthy();
  });
});
