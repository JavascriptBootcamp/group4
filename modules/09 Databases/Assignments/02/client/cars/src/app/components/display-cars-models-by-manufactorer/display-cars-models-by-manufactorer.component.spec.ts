import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarsModelsByManufactorerComponent } from './display-cars-models-by-manufactorer.component';

describe('DisplayCarsModelsByManufactorerComponent', () => {
  let component: DisplayCarsModelsByManufactorerComponent;
  let fixture: ComponentFixture<DisplayCarsModelsByManufactorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarsModelsByManufactorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarsModelsByManufactorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
