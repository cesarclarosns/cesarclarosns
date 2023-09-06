import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-instagram-logo-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-logo.svg',
  styles: [],
})
export class InstagramLogoIconComponent extends IconComponent {}
