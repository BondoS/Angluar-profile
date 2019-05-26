import { TestBed } from '@angular/core/testing';

import { UiDirectionServiceService } from './ui-direction-service.service';

describe('UiDirectionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiDirectionServiceService = TestBed.get(UiDirectionServiceService);
    expect(service).toBeTruthy();
  });
});
