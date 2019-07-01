import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarExpensiveComponent } from './display-car-expensive.component';

describe('DisplayCarExpensiveComponent', () => {
  let component: DisplayCarExpensiveComponent;
  let fixture: ComponentFixture<DisplayCarExpensiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarExpensiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarExpensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
