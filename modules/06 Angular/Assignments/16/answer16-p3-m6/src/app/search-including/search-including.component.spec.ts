import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIncludingComponent } from './search-including.component';

describe('SearchIncludingComponent', () => {
  let component: SearchIncludingComponent;
  let fixture: ComponentFixture<SearchIncludingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIncludingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIncludingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
