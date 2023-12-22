import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutImageTacheComponent } from './ajout-image-tache.component';

describe('AjoutImageTacheComponent', () => {
  let component: AjoutImageTacheComponent;
  let fixture: ComponentFixture<AjoutImageTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutImageTacheComponent]
    });
    fixture = TestBed.createComponent(AjoutImageTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
