import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-globe-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './globe.svg',
  styles: [],
})
export class GlobeIconComponent extends IconComponent {}
