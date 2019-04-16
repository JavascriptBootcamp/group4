import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSideVideosComponent } from './bar-side-videos.component';

describe('BarSideVideosComponent', () => {
  let component: BarSideVideosComponent;
  let fixture: ComponentFixture<BarSideVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSideVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarSideVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
