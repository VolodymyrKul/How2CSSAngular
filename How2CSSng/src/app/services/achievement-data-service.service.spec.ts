import { TestBed } from '@angular/core/testing';

import { AchievementDataServiceService } from './achievement-data-service.service';

describe('AchievementDataServiceService', () => {
  let service: AchievementDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievementDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
