import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmployeComponent } from './header-employe.component';

describe('HeaderEmployeComponent', () => {
  let component: HeaderEmployeComponent;
  let fixture: ComponentFixture<HeaderEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEmployeComponent]
    });
    fixture = TestBed.createComponent(HeaderEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
