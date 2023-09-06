import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-linkedin-logo-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin-logo.svg',
  styles: [],
})
export class LinkedinLogoIconComponent extends IconComponent {}
