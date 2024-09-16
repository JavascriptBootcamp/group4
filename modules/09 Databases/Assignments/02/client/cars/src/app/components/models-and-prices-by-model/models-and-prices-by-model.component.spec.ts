import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsAndPricesByModelComponent } from './models-and-prices-by-model.component';

describe('ModelsAndPricesByModelComponent', () => {
  let component: ModelsAndPricesByModelComponent;
  let fixture: ComponentFixture<ModelsAndPricesByModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsAndPricesByModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsAndPricesByModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
