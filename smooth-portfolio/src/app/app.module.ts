import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPortfolioComponent } from './about-portfolio/about-portfolio.component';
import { ExpPortfolioComponent } from './exp-portfolio/exp-portfolio.component';
import { SkillsPortfolioComponent } from './skills-portfolio/skills-portfolio.component';
import { EduPortfolioComponent } from './edu-portfolio/edu-portfolio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutPortfolioComponent,
    ExpPortfolioComponent,
    SkillsPortfolioComponent,
    EduPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
