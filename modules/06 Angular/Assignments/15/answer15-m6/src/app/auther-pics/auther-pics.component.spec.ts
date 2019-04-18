import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherPicsComponent } from './auther-pics.component';

describe('AutherPicsComponent', () => {
  let component: AutherPicsComponent;
  let fixture: ComponentFixture<AutherPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutherPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutherPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
