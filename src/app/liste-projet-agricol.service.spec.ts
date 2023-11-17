import { TestBed } from '@angular/core/testing';

import { ListeProjetAgricolService } from './liste-projet-agricol.service';

describe('ListeProjetAgricolService', () => {
  let service: ListeProjetAgricolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeProjetAgricolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
