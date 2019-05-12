import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorImagesComponent } from './author-images.component';

describe('AuthorImagesComponent', () => {
  let component: AuthorImagesComponent;
  let fixture: ComponentFixture<AuthorImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
