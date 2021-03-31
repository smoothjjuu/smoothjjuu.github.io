import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutPortfolioComponent} from './about-portfolio/about-portfolio.component';
import {EduPortfolioComponent} from './edu-portfolio/edu-portfolio.component';
import {ExpPortfolioComponent} from './exp-portfolio/exp-portfolio.component';
import {SkillsPortfolioComponent} from './skills-portfolio/skills-portfolio.component';
import {ResumePortfolioComponent} from './resume-portfolio/resume-portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutPortfolioComponent },
  { path: 'educations', component: EduPortfolioComponent },
  { path: 'experience', component: ExpPortfolioComponent },
  { path: 'skills', component: SkillsPortfolioComponent },
  { path: 'resume', component: ResumePortfolioComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
