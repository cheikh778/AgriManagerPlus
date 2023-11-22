import { TestBed } from '@angular/core/testing';

import { AssignationtacheService } from './assignationtache.service';

describe('AssignationtacheService', () => {
  let service: AssignationtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignationtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
