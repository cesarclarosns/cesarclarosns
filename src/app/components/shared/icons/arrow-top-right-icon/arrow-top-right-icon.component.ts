import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-arrow-top-right-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow-top-right.svg',
  styles: [],
})
export class ArrowTopRightIconComponent extends IconComponent {}
