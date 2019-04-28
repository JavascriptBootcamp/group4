import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPicsComponent } from './top-pics.component';

describe('TopPicsComponent', () => {
  let component: TopPicsComponent;
  let fixture: ComponentFixture<TopPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
