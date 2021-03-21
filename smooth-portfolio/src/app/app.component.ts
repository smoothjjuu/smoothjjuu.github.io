import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeToggleService } from './theme-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smooth-portfolio';
  windowSize : number;
  isCollapsed = true;
  isThemeDark: Observable<boolean>;

  constructor(
    private themeService: ThemeToggleService
  ){}
  
  @HostListener('window: resize',['$event'])
  onResize(event){
    this.windowSize = event.target.innerWidth;
  }

  toggleCollapsed(): void{
     if( this.windowSize < 900 ){
      this.isCollapsed = !this.isCollapsed;
     }
  }
  ngOnInit(){
    this.windowSize = window.innerWidth;
    this.isThemeDark = this.themeService.isThemeDark;
  }
  toggleDarkTheme(checked){
    this.themeService.setDarkTheme(checked.checked);
  }
}
