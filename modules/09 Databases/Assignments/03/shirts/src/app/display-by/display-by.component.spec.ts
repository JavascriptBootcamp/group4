import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayByComponent } from './display-by.component';

describe('DisplayByComponent', () => {
  let component: DisplayByComponent;
  let fixture: ComponentFixture<DisplayByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
