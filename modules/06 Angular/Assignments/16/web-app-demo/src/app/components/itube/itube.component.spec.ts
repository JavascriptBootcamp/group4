import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItubeComponent } from './itube.component';

describe('ItubeComponent', () => {
  let component: ItubeComponent;
  let fixture: ComponentFixture<ItubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
