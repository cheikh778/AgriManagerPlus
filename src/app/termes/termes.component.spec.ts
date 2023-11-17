import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermesComponent } from './termes.component';

describe('TermesComponent', () => {
  let component: TermesComponent;
  let fixture: ComponentFixture<TermesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermesComponent]
    });
    fixture = TestBed.createComponent(TermesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
