import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeToggleService {
  _themeDark: Subject<boolean> = new Subject<boolean>();
  isThemeDark = this._themeDark.asObservable();
  constructor() { }

  setDarkTheme(isThemeDark: boolean){
    this._themeDark.next(isThemeDark);

    if (isThemeDark) {
      document.body.setAttribute("data-theme", "dark-mode");
      document.documentElement.style.setProperty('--primary-color', '#2a70bb');
    }else{
      document.body.setAttribute("data-theme", "light-mode");
      document.documentElement.style.setProperty('--primary-color', '#007bff');
    }
    localStorage.setItem('data-theme', `${isThemeDark}`);
  }
}
