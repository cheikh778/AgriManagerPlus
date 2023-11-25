import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPaysanComponent } from './header-paysan.component';

describe('HeaderPaysanComponent', () => {
  let component: HeaderPaysanComponent;
  let fixture: ComponentFixture<HeaderPaysanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPaysanComponent]
    });
    fixture = TestBed.createComponent(HeaderPaysanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
