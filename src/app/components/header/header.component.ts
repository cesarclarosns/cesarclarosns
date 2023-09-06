import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubLogoIconComponent } from '../shared/icons/github-logo-icon/github-logo-icon.component';
import { GlobeIconComponent } from '../shared/icons/globe-icon/globe-icon.component';
import { MoonIconComponent } from '../shared/icons/moon-icon/moon-icon.component';
import { SunIconComponent } from '../shared/icons/sun-icon/sun-icon.component';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    GithubLogoIconComponent,
    GlobeIconComponent,
    MoonIconComponent,
    SunIconComponent,
  ],
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}

  switchTheme() {
    this.themeService.switchTheme();
  }
}
