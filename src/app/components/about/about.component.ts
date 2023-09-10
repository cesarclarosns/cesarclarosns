import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="scroll-mt-40">
      <p class="opacity-80">
        En 2021 comencé mi camino como desarrollador Full-Stack y hasta ahora he
        tenido la oportunidad de hacer desarrollo Front-end y Back-end, DevOps e
        Infraestructura. Hoy en día estoy realmente interesado en crear
        productos que vivan en el Internet.
      </p>
    </section>
  `,
  styles: [],
})
export class AboutComponent {}
