import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFormCompComponent } from './index-form-comp.component';

describe('IndexFormCompComponent', () => {
  let component: IndexFormCompComponent;
  let fixture: ComponentFixture<IndexFormCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFormCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
