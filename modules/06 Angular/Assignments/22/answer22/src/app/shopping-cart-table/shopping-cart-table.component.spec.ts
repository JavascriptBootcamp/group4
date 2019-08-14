import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTableComponent } from './shopping-cart-table.component';

describe('ShoppingCartTableComponent', () => {
  let component: ShoppingCartTableComponent;
  let fixture: ComponentFixture<ShoppingCartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
