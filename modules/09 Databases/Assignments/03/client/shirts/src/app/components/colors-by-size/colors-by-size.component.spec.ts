import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsBySizeComponent } from './colors-by-size.component';

describe('ColorsBySizeComponent', () => {
  let component: ColorsBySizeComponent;
  let fixture: ComponentFixture<ColorsBySizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsBySizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsBySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
