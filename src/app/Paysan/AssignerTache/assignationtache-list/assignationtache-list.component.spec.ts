import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignationtacheListComponent } from './assignationtache-list.component';

describe('AssignationtacheListComponent', () => {
  let component: AssignationtacheListComponent;
  let fixture: ComponentFixture<AssignationtacheListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignationtacheListComponent]
    });
    fixture = TestBed.createComponent(AssignationtacheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
