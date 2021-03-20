import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpPortfolioComponent } from './exp-portfolio.component';

describe('ExpPortfolioComponent', () => {
  let component: ExpPortfolioComponent;
  let fixture: ComponentFixture<ExpPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
