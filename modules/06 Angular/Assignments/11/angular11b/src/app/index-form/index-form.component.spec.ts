import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFormComponent } from './index-form.component';

describe('IndexFormComponent', () => {
  let component: IndexFormComponent;
  let fixture: ComponentFixture<IndexFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
