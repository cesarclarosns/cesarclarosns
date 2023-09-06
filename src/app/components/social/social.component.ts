import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubLogoIconComponent } from '../shared/icons/github-logo-icon/github-logo-icon.component';
import { InstagramLogoIconComponent } from '../shared/icons/instagram-logo-icon/instagram-logo-icon.component';
import { LinkedinLogoIconComponent } from '../shared/icons/linkedin-logo-icon/linkedin-logo-icon.component';
import { ArrowTopRightIconComponent } from '../shared/icons/arrow-top-right-icon/arrow-top-right-icon.component';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [
    CommonModule,
    GithubLogoIconComponent,
    InstagramLogoIconComponent,
    LinkedinLogoIconComponent,
    ArrowTopRightIconComponent,
  ],
  template: `
    <div class="flex flex-row gap-4">
      <app-github-logo-icon
        class="h-6 hover:cursor-pointer hover:text-secondary-focus"
        (click)="(null)"
      ></app-github-logo-icon>
      <app-instagram-logo-icon
        class="h-6 hover:cursor-pointer hover:text-secondary-focus"
      ></app-instagram-logo-icon>
      <app-linkedin-logo-icon
        class="h-6 hover:cursor-pointer hover:text-secondary-focus"
      ></app-linkedin-logo-icon>
    </div>
  `,
  styles: [],
})
export class SocialComponent {
  constructor(private themeService: ThemeService) {}
}
