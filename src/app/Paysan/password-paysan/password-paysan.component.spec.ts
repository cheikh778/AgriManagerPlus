import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPaysanComponent } from './password-paysan.component';

describe('PasswordPaysanComponent', () => {
  let component: PasswordPaysanComponent;
  let fixture: ComponentFixture<PasswordPaysanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordPaysanComponent]
    });
    fixture = TestBed.createComponent(PasswordPaysanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
