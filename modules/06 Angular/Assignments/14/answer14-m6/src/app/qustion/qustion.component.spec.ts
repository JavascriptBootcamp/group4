import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QustionComponent } from './qustion.component';

describe('QustionComponent', () => {
  let component: QustionComponent;
  let fixture: ComponentFixture<QustionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QustionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
