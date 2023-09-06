import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: [],
})
export class IconComponent {
  @HostBinding('class')
  @Input()
  class!: string;
}
