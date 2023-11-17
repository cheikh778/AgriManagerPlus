import { TestBed } from '@angular/core/testing';

import { DemandeValidationProjetService } from './demande-validation-projet.service';

describe('DemandeValidationProjetService', () => {
  let service: DemandeValidationProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeValidationProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
