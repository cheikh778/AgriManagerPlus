import { TestBed } from '@angular/core/testing';

import { AssignationTacheService } from './assignationtache.service';

describe('AssignationtacheService', () => {
  let service: AssignationTacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignationTacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
