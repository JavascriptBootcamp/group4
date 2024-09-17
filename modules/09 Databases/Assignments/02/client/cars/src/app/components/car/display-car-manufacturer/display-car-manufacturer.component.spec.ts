import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarManufacturerComponent } from './display-car-manufacturer.component';

describe('DisplayCarManufacturerComponent', () => {
  let component: DisplayCarManufacturerComponent;
  let fixture: ComponentFixture<DisplayCarManufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarManufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
