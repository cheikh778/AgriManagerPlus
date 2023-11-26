import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSemenceComponent } from './update-semence.component';

describe('UpdateSemenceComponent', () => {
  let component: UpdateSemenceComponent;
  let fixture: ComponentFixture<UpdateSemenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSemenceComponent]
    });
    fixture = TestBed.createComponent(UpdateSemenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
