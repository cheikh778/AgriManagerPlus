import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEauComponent } from './update-eau.component';

describe('UpdateEauComponent', () => {
  let component: UpdateEauComponent;
  let fixture: ComponentFixture<UpdateEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEauComponent]
    });
    fixture = TestBed.createComponent(UpdateEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
