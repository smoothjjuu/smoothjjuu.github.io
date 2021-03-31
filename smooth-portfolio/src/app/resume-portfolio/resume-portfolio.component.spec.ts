import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePortfolioComponent } from './resume-portfolio.component';

describe('ResumePortfolioComponent', () => {
  let component: ResumePortfolioComponent;
  let fixture: ComponentFixture<ResumePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumePortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
