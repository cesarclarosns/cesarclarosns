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
        <h1 class="text-xl">
          <span class="font-bold">Desarrollador Full-Stack</span> ||
          <span class="font-bold">Ingeniero en Biotecnología</span>
        </h1>
      </div>
    </div>
  `,
  styles: [],
})
export class HeroComponent {}
