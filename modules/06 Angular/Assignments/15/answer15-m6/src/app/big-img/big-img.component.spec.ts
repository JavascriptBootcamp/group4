import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigImgComponent } from './big-img.component';

describe('BigImgComponent', () => {
  let component: BigImgComponent;
  let fixture: ComponentFixture<BigImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
