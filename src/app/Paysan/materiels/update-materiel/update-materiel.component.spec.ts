import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaterielComponent } from './update-materiel.component';

describe('UpdateMaterielComponent', () => {
  let component: UpdateMaterielComponent;
  let fixture: ComponentFixture<UpdateMaterielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMaterielComponent]
    });
    fixture = TestBed.createComponent(UpdateMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
