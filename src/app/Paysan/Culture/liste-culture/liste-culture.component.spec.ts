import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCultureComponent } from './liste-culture.component';

describe('ListeCultureComponent', () => {
  let component: ListeCultureComponent;
  let fixture: ComponentFixture<ListeCultureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCultureComponent]
    });
    fixture = TestBed.createComponent(ListeCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
