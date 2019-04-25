import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosMenuComponent } from './videos-menu.component';

describe('VideosMenuComponent', () => {
  let component: VideosMenuComponent;
  let fixture: ComponentFixture<VideosMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
