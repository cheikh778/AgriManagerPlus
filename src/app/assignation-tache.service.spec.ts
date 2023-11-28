import { TestBed } from '@angular/core/testing';

import { AssignationTacheService } from './assignation-tache.service';

describe('AssignationTacheService', () => {
  let service: AssignationTacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignationTacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
