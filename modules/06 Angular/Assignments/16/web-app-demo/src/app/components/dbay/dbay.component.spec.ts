import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbayComponent } from './dbay.component';

describe('DbayComponent', () => {
  let component: DbayComponent;
  let fixture: ComponentFixture<DbayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
