import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCultureComponent } from './update-culture.component';

describe('UpdateCultureComponent', () => {
  let component: UpdateCultureComponent;
  let fixture: ComponentFixture<UpdateCultureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCultureComponent]
    });
    fixture = TestBed.createComponent(UpdateCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
