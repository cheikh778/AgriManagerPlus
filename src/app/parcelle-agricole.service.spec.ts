import { TestBed } from '@angular/core/testing';

import { ParcelleAgricoleService } from './parcelle-agricole.service';

describe('ParcelleAgricoleService', () => {
  let service: ParcelleAgricoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcelleAgricoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
