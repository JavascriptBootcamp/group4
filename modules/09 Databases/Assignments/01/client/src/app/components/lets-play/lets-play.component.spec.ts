import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsPlayComponent } from './lets-play.component';

describe('LetsPlayComponent', () => {
  let component: LetsPlayComponent;
  let fixture: ComponentFixture<LetsPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
