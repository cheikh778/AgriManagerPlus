import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSemenceComponent } from './ajout-semence.component';

describe('AjoutSemenceComponent', () => {
  let component: AjoutSemenceComponent;
  let fixture: ComponentFixture<AjoutSemenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutSemenceComponent]
    });
    fixture = TestBed.createComponent(AjoutSemenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
