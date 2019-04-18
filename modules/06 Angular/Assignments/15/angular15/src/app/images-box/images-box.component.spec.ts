import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesBoxComponent } from './images-box.component';

describe('ImagesBoxComponent', () => {
  let component: ImagesBoxComponent;
  let fixture: ComponentFixture<ImagesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
