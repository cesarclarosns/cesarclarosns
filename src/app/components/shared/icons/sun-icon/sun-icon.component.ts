import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-sun-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sun.svg',
  styles: [],
})
export class SunIconComponent extends IconComponent {}
