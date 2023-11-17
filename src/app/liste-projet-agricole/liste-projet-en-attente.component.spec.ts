import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProjetEnAttenteComponent } from './liste-projet-en-attente.component';

describe('ListeProjetEnAttenteComponent', () => {
  let component: ListeProjetEnAttenteComponent;
  let fixture: ComponentFixture<ListeProjetEnAttenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProjetEnAttenteComponent]
    });
    fixture = TestBed.createComponent(ListeProjetEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
