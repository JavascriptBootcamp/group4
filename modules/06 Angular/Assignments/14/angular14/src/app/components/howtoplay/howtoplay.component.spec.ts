import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoplayComponent } from './howtoplay.component';

describe('HowtoplayComponent', () => {
  let component: HowtoplayComponent;
  let fixture: ComponentFixture<HowtoplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtoplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
