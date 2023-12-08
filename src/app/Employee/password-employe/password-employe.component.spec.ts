import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEmployeComponent } from './password-employe.component';

describe('PasswordEmployeComponent', () => {
  let component: PasswordEmployeComponent;
  let fixture: ComponentFixture<PasswordEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordEmployeComponent]
    });
    fixture = TestBed.createComponent(PasswordEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
