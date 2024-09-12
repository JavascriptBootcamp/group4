import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtByIdComponent } from './shirt-by-id.component';

describe('ShirtByIdComponent', () => {
  let component: ShirtByIdComponent;
  let fixture: ComponentFixture<ShirtByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
