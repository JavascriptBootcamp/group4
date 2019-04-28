import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigVideoComponent } from './big-video.component';

describe('BigVideoComponent', () => {
  let component: BigVideoComponent;
  let fixture: ComponentFixture<BigVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
