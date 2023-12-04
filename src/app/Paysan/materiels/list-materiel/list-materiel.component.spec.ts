import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaterielComponent } from './list-materiel.component';

describe('ListMaterielComponent', () => {
  let component: ListMaterielComponent;
  let fixture: ComponentFixture<ListMaterielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMaterielComponent]
    });
    fixture = TestBed.createComponent(ListMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
