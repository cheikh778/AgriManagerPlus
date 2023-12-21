import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePublicationComponent } from './liste-publication.component';

describe('ListePublicationComponent', () => {
  let component: ListePublicationComponent;
  let fixture: ComponentFixture<ListePublicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePublicationComponent]
    });
    fixture = TestBed.createComponent(ListePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
