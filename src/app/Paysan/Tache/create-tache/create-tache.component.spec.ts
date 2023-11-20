import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTacheComponent } from './create-tache.component';

describe('CreateTacheComponent', () => {
  let component: CreateTacheComponent;
  let fixture: ComponentFixture<CreateTacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTacheComponent]
    });
    fixture = TestBed.createComponent(CreateTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
