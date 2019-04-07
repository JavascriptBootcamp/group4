import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationReactiveFormComponent } from './registration-reactive-form.component';

describe('RegistrationReactiveFormComponent', () => {
  let component: RegistrationReactiveFormComponent;
  let fixture: ComponentFixture<RegistrationReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
