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
    <ul class="flex flex-row gap-4">
      <li class="hover:cursor-pointer">
        <a
          class="group transition-all duration-300 ease-in-out"
          href="https://github.com/cesarclarosns"
          target="_blank"
        >
          <app-github-logo-icon
            class="h-6 hover:cursor-pointer hover:text-secondary-focus"
            (click)="(null)"
          ></app-github-logo-icon>
        </a>
      </li>
      <li class="hover:cursor-pointer">
        <a
          class="group transition-all duration-300 ease-in-out"
          href="https://www.instagram.com/cesarclarosns/"
          target="_blank"
        >
          <app-instagram-logo-icon
            class="h-6 hover:cursor-pointer hover:text-secondary-focus"
          ></app-instagram-logo-icon>
        </a>
      </li>
      <li class="hover:cursor-pointer">
        <a
          class="group transition-all duration-300 ease-in-out"
          href="https://www.linkedin.com/in/cesarclarosns/"
          target="_blank"
        >
          <app-linkedin-logo-icon
            class="h-6 hover:cursor-pointer hover:text-secondary-focus"
          ></app-linkedin-logo-icon>
        </a>
      </li>
    </ul>
  `,
  styles: [],
})
export class SocialComponent {
  constructor(private themeService: ThemeService) {}
}
