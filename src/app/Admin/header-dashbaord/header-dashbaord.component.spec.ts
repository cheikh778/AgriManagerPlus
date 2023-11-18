import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDashbaordComponent } from './header-dashbaord.component';

describe('HeaderDashbaordComponent', () => {
  let component: HeaderDashbaordComponent;
  let fixture: ComponentFixture<HeaderDashbaordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDashbaordComponent]
    });
    fixture = TestBed.createComponent(HeaderDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
