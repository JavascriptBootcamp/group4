import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarRangeComponent } from './display-car-range.component';

describe('DisplayCarRangeComponent', () => {
  let component: DisplayCarRangeComponent;
  let fixture: ComponentFixture<DisplayCarRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
