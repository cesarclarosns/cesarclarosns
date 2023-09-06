import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-base-200">
      <div class="flex flex-col container mx-auto py-10 gap-4 p-4">
        <div>
          <p class="font-semibold">© 2023 César Claros</p>
        </div>
        <div>
          <p class="text-sm">
            Hosteado en AWS usando una instancia EC2, una IP Elástica y Route53
            con Docker y Traefik.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class FooterComponent {}
