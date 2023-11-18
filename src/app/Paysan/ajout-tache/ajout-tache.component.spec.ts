import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTacheComponent } from './ajout-tache.component';

describe('AjoutTacheComponent', () => {
  let component: AjoutTacheComponent;
  let fixture: ComponentFixture<AjoutTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutTacheComponent]
    });
    fixture = TestBed.createComponent(AjoutTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
