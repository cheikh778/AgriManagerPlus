import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSemenceComponent } from './liste-semence.component';

describe('ListeSemenceComponent', () => {
  let component: ListeSemenceComponent;
  let fixture: ComponentFixture<ListeSemenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSemenceComponent]
    });
    fixture = TestBed.createComponent(ListeSemenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
