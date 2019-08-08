import { TestBed } from '@angular/core/testing';

import { WokerService } from './woker.service';

describe('WokerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WokerService = TestBed.get(WokerService);
    expect(service).toBeTruthy();
  });
});
