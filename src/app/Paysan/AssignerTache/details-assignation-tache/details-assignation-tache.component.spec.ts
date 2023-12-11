import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAssignationTacheComponent } from './details-assignation-tache.component';

describe('DetailsAssignationTacheComponent', () => {
  let component: DetailsAssignationTacheComponent;
  let fixture: ComponentFixture<DetailsAssignationTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAssignationTacheComponent]
    });
    fixture = TestBed.createComponent(DetailsAssignationTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
