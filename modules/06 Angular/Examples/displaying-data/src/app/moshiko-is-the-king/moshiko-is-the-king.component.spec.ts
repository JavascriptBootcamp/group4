import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshikoIsTheKingComponent } from './moshiko-is-the-king.component';

describe('MoshikoIsTheKingComponent', () => {
  let component: MoshikoIsTheKingComponent;
  let fixture: ComponentFixture<MoshikoIsTheKingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoshikoIsTheKingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoshikoIsTheKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
