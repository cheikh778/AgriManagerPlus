import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAComponent } from './dashboard-a.component';

describe('DashboardAComponent', () => {
  let component: DashboardAComponent;
  let fixture: ComponentFixture<DashboardAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAComponent]
    });
    fixture = TestBed.createComponent(DashboardAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
