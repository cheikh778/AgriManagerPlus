import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsParcelleAgricoleComponent } from './details-parcelle-agricole.component';

describe('DetailsParcelleAgricoleComponent', () => {
  let component: DetailsParcelleAgricoleComponent;
  let fixture: ComponentFixture<DetailsParcelleAgricoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsParcelleAgricoleComponent]
    });
    fixture = TestBed.createComponent(DetailsParcelleAgricoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
