import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInstructionsComponent } from './game-instructions.component';

describe('GameInstructionsComponent', () => {
  let component: GameInstructionsComponent;
  let fixture: ComponentFixture<GameInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
