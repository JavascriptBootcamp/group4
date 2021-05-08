import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCarComponent } from './adding-car.component';

describe('AddingCarComponent', () => {
  let component: AddingCarComponent;
  let fixture: ComponentFixture<AddingCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
