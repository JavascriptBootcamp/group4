import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateDrivenFormComponent } from './user-template-driven-form.component';

describe('UserTemplateDrivenFormComponent', () => {
  let component: UserTemplateDrivenFormComponent;
  let fixture: ComponentFixture<UserTemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
