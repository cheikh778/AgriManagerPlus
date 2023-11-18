import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUtilisateurComponent } from './ajout-utilisateur.component';

describe('AjoutUtilisateurComponent', () => {
  let component: AjoutUtilisateurComponent;
  let fixture: ComponentFixture<AjoutUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutUtilisateurComponent]
    });
    fixture = TestBed.createComponent(AjoutUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
