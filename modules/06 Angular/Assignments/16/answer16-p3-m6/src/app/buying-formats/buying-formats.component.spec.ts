import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingFormatsComponent } from './buying-formats.component';

describe('BuyingFormatsComponent', () => {
  let component: BuyingFormatsComponent;
  let fixture: ComponentFixture<BuyingFormatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingFormatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
