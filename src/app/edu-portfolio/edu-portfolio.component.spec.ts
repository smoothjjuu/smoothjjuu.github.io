import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduPortfolioComponent } from './edu-portfolio.component';

describe('EduPortfolioComponent', () => {
  let component: EduPortfolioComponent;
  let fixture: ComponentFixture<EduPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
