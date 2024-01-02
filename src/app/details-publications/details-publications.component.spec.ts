import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPublicationsComponent } from './details-publications.component';

describe('DetailsPublicationsComponent', () => {
  let component: DetailsPublicationsComponent;
  let fixture: ComponentFixture<DetailsPublicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPublicationsComponent]
    });
    fixture = TestBed.createComponent(DetailsPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
