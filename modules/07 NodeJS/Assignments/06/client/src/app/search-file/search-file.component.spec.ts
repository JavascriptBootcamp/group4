import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFileComponent } from './search-file.component';

describe('SearchFileComponent', () => {
  let component: SearchFileComponent;
  let fixture: ComponentFixture<SearchFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
