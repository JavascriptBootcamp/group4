import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstushPanelComponent } from './instush-panel.component';

describe('InstushPanelComponent', () => {
  let component: InstushPanelComponent;
  let fixture: ComponentFixture<InstushPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstushPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstushPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
