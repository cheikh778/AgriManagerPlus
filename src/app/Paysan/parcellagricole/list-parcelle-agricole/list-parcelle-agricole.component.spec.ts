import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcelleAgricoleComponent } from './list-parcelle-agricole.component';

describe('ListParcelleAgricoleComponent', () => {
  let component: ListParcelleAgricoleComponent;
  let fixture: ComponentFixture<ListParcelleAgricoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListParcelleAgricoleComponent]
    });
    fixture = TestBed.createComponent(ListParcelleAgricoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
