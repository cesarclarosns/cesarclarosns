import { Injectable, signal } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookieProps } from '../interfaces/cookie-props.interface';
import { Theme } from '../types/theme.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = signal<Theme>('night');

  constructor(private cookieService: CookieService) {
    this.loadTheme();
  }

  loadTheme() {
    let theme = this.cookieService.get('theme') as CookieProps['theme'];
    if (!theme) theme = 'night';
    this.setTheme(theme);
  }

  setTheme(theme: Theme) {
    this.cookieService.set('theme', theme);
    this.currentTheme.set(theme);
    let htmlElement = document.getElementsByTagName('html').item(0);
    htmlElement?.setAttribute('data-theme', theme);
  }

  switchTheme() {
    let theme = this.cookieService.get('theme') as CookieProps['theme'];
    if (theme === 'night') {
      this.setTheme('light');
    } else {
      this.setTheme('night');
    }
  }
}
