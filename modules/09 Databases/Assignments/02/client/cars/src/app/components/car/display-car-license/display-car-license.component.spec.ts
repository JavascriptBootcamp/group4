import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarLicenseComponent } from './display-car-license.component';

describe('DisplayCarLicenseComponent', () => {
  let component: DisplayCarLicenseComponent;
  let fixture: ComponentFixture<DisplayCarLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCarLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCarLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
