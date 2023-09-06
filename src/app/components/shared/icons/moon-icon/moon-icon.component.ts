import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-moon-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moon.svg',
  styles: [],
})
export class MoonIconComponent extends IconComponent {}
