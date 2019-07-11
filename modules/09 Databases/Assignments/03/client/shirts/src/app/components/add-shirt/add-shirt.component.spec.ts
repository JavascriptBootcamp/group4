import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShirtComponent } from './add-shirt.component';

describe('AddShirtComponent', () => {
  let component: AddShirtComponent;
  let fixture: ComponentFixture<AddShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
