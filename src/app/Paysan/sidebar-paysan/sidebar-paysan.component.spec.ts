import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPaysanComponent } from './sidebar-paysan.component';

describe('SidebarPaysanComponent', () => {
  let component: SidebarPaysanComponent;
  let fixture: ComponentFixture<SidebarPaysanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarPaysanComponent]
    });
    fixture = TestBed.createComponent(SidebarPaysanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
