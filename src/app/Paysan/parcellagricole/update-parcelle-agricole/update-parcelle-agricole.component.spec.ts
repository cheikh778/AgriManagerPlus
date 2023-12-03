import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParcelleAgricoleComponent } from './update-parcelle-agricole.component';

describe('UpdateParcelleAgricoleComponent', () => {
  let component: UpdateParcelleAgricoleComponent;
  let fixture: ComponentFixture<UpdateParcelleAgricoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateParcelleAgricoleComponent]
    });
    fixture = TestBed.createComponent(UpdateParcelleAgricoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
