import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeToggleService } from './theme-toggle.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX', style({
        transform: 'rotate(45deg)', 
        transformOrigin: 'left',
        margin: '6px'
      })),
      state('hide', style({
        opacity: 0
      })),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'smooth-portfolio';
  windowSize : number;
  isCollapsed = true;
  isThemeDark: boolean;
  storedTheme = localStorage.getItem("data-theme");

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
    this.isThemeDark = this.storedTheme == "true" ? true : false;
    this.themeService.setDarkTheme(this.isThemeDark);    
  }

  toggleDarkTheme(checked){
    this.themeService.setDarkTheme(checked.checked);
  }
}
