import { TestBed } from '@angular/core/testing';

import { EauService } from './eau.service';

describe('EauService', () => {
  let service: EauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
