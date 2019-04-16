import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPictureComponent } from './main-picture.component';

describe('MainPictureComponent', () => {
  let component: MainPictureComponent;
  let fixture: ComponentFixture<MainPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
