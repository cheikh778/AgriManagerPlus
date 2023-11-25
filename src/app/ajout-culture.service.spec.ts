import { TestBed } from '@angular/core/testing';

import { AjoutCultureService } from './ajout-culture.service';

describe('AjoutCultureService', () => {
  let service: AjoutCultureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutCultureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
