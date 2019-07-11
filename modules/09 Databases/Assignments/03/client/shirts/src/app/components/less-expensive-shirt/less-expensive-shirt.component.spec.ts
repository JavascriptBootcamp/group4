import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessExpensiveShirtComponent } from './less-expensive-shirt.component';

describe('LessExpensiveShirtComponent', () => {
  let component: LessExpensiveShirtComponent;
  let fixture: ComponentFixture<LessExpensiveShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessExpensiveShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessExpensiveShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
