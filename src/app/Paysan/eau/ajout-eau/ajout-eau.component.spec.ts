import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEauComponent } from './ajout-eau.component';

describe('AjoutEauComponent', () => {
  let component: AjoutEauComponent;
  let fixture: ComponentFixture<AjoutEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEauComponent]
    });
    fixture = TestBed.createComponent(AjoutEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
