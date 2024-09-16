import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreExpensiveCarComponent } from './more-expensive-car.component';

describe('MoreExpensiveCarComponent', () => {
  let component: MoreExpensiveCarComponent;
  let fixture: ComponentFixture<MoreExpensiveCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreExpensiveCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreExpensiveCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
