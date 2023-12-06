import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMaterielComponent } from './details-materiel.component';

describe('DetailsMaterielComponent', () => {
  let component: DetailsMaterielComponent;
  let fixture: ComponentFixture<DetailsMaterielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsMaterielComponent]
    });
    fixture = TestBed.createComponent(DetailsMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
