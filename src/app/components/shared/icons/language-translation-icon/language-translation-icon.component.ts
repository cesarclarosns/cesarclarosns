import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-language-translation-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-translation.svg',
  styles: [],
})
export class LanguageTranslationIconComponent extends IconComponent {}
