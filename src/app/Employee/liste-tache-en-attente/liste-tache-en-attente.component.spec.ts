import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTacheEnAttenteComponent } from './liste-tache-en-attente.component';

describe('ListeTacheEnAttenteComponent', () => {
  let component: ListeTacheEnAttenteComponent;
  let fixture: ComponentFixture<ListeTacheEnAttenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeTacheEnAttenteComponent]
    });
    fixture = TestBed.createComponent(ListeTacheEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
