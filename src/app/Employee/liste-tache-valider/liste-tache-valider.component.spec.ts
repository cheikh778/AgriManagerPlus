import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTacheValiderComponent } from './liste-tache-valider.component';

describe('ListeTacheValiderComponent', () => {
  let component: ListeTacheValiderComponent;
  let fixture: ComponentFixture<ListeTacheValiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeTacheValiderComponent]
    });
    fixture = TestBed.createComponent(ListeTacheValiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
