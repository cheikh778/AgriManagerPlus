import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeComponent } from './create-employe.component';

describe('CreateEmployeComponent', () => {
  let component: CreateEmployeComponent;
  let fixture: ComponentFixture<CreateEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
