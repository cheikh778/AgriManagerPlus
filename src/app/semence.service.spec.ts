import { TestBed } from '@angular/core/testing';

import { SemenceService } from './semence.service';

describe('SemenceService', () => {
  let service: SemenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
