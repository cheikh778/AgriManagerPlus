import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssignationTacheComponent } from './update-assignation-tache.component';

describe('UpdateAssignationTacheComponent', () => {
  let component: UpdateAssignationTacheComponent;
  let fixture: ComponentFixture<UpdateAssignationTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAssignationTacheComponent]
    });
    fixture = TestBed.createComponent(UpdateAssignationTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
