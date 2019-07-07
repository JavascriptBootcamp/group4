import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingShirtComponent } from './adding-shirt.component';

describe('AddingShirtComponent', () => {
  let component: AddingShirtComponent;
  let fixture: ComponentFixture<AddingShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
