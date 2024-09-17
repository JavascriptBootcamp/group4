import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarModelComponent } from './display-car-model.component';

describe('DisplayCarModelComponent', () => {
  let component: DisplayCarModelComponent;
  let fixture: ComponentFixture<DisplayCarModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
