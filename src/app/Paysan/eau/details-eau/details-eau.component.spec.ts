import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEauComponent } from './details-eau.component';

describe('DetailsEauComponent', () => {
  let component: DetailsEauComponent;
  let fixture: ComponentFixture<DetailsEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEauComponent]
    });
    fixture = TestBed.createComponent(DetailsEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
