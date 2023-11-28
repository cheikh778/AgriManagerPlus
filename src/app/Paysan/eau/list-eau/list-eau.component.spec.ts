import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEauComponent } from './list-eau.component';

describe('ListEauComponent', () => {
  let component: ListEauComponent;
  let fixture: ComponentFixture<ListEauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEauComponent]
    });
    fixture = TestBed.createComponent(ListEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
