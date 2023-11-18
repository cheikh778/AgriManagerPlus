import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCultureComponent } from './ajout-culture.component';

describe('AjoutCultureComponent', () => {
  let component: AjoutCultureComponent;
  let fixture: ComponentFixture<AjoutCultureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutCultureComponent]
    });
    fixture = TestBed.createComponent(AjoutCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
