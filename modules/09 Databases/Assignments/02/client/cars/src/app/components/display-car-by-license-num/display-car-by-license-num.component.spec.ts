import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarByLicenseNumComponent } from './display-car-by-license-num.component';

describe('DisplayCarByLicenseNumComponent', () => {
  let component: DisplayCarByLicenseNumComponent;
  let fixture: ComponentFixture<DisplayCarByLicenseNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarByLicenseNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarByLicenseNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
