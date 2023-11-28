import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEmployeComponent } from './ajout-employe.component';

describe('AjoutEmployeComponent', () => {
  let component: AjoutEmployeComponent;
  let fixture: ComponentFixture<AjoutEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEmployeComponent]
    });
    fixture = TestBed.createComponent(AjoutEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
