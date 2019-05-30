import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDeskComponent } from './chat-desk.component';

describe('ChatDeskComponent', () => {
  let component: ChatDeskComponent;
  let fixture: ComponentFixture<ChatDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
