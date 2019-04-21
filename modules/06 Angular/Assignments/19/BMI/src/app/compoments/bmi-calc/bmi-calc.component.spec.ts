import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalcComponent } from './bmi-calc.component';

describe('BmiCalcComponent', () => {
  let component: BmiCalcComponent;
  let fixture: ComponentFixture<BmiCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
