import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtsByPriceRangeComponent } from './shirts-by-price-range.component';

describe('ShirtsByPriceRangeComponent', () => {
  let component: ShirtsByPriceRangeComponent;
  let fixture: ComponentFixture<ShirtsByPriceRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtsByPriceRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtsByPriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
