import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smooth-portfolio';
  windowSize : number;
  isCollapsed = true;
  
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
  }
}
