import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmlPictureComponent } from './sml-picture.component';

describe('SmlPictureComponent', () => {
  let component: SmlPictureComponent;
  let fixture: ComponentFixture<SmlPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmlPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmlPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
