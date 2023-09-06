import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-github-logo-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-logo.svg',
  styles: [],
})
export class GithubLogoIconComponent extends IconComponent {}
