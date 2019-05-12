import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardTableComponent } from './shopping-card-table.component';

describe('ShoppingCardTableComponent', () => {
  let component: ShoppingCardTableComponent;
  let fixture: ComponentFixture<ShoppingCardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCardTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
