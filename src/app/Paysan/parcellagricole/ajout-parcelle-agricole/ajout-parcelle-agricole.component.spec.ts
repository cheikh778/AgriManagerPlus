import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutParcelleAgricoleComponent } from './ajout-parcelle-agricole.component';

describe('AjoutParcelleAgricoleComponent', () => {
  let component: AjoutParcelleAgricoleComponent;
  let fixture: ComponentFixture<AjoutParcelleAgricoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutParcelleAgricoleComponent]
    });
    fixture = TestBed.createComponent(AjoutParcelleAgricoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
