import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarsByYearsComponent } from './display-cars-by-years.component';

describe('DisplayCarsByYearsComponent', () => {
  let component: DisplayCarsByYearsComponent;
  let fixture: ComponentFixture<DisplayCarsByYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarsByYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarsByYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
