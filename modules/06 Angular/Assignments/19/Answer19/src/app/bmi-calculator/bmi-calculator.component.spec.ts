import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorComponent } from './bmi-calculator.component';

describe('BmiCalculatorComponent', () => {
  let component: BmiCalculatorComponent;
  let fixture: ComponentFixture<BmiCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
