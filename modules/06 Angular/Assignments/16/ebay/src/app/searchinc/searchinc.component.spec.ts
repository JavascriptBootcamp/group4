import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchincComponent } from './searchinc.component';

describe('SearchincComponent', () => {
  let component: SearchincComponent;
  let fixture: ComponentFixture<SearchincComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchincComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
