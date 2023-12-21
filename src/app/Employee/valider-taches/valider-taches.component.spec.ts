import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderTachesComponent } from './valider-taches.component';

describe('ValiderTachesComponent', () => {
  let component: ValiderTachesComponent;
  let fixture: ComponentFixture<ValiderTachesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValiderTachesComponent]
    });
    fixture = TestBed.createComponent(ValiderTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
