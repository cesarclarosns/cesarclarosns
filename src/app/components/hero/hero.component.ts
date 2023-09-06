import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-5">
      <div>
        <h1 class="font-bold text-5xl">César Claros</h1>
      </div>
      <div>
        <h1 class="font-bold text-xl">
          Desarrollador Full-Stack e Ingeniero en Biotecnología
        </h1>
      </div>
    </div>
  `,
  styles: [],
})
export class HeroComponent {}
