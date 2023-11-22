import { TestBed } from '@angular/core/testing';

import { IntratAgricoleService } from './intrat-agricole.service';

describe('IntratAgricoleService', () => {
  let service: IntratAgricoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntratAgricoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
