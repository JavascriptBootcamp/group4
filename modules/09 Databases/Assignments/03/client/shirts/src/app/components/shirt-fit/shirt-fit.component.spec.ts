import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtFitComponent } from './shirt-fit.component';

describe('ShirtFitComponent', () => {
  let component: ShirtFitComponent;
  let fixture: ComponentFixture<ShirtFitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtFitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
