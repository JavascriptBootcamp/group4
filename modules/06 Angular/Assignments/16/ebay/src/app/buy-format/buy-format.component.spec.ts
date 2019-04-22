import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFormatComponent } from './buy-format.component';

describe('BuyFormatComponent', () => {
  let component: BuyFormatComponent;
  let fixture: ComponentFixture<BuyFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
