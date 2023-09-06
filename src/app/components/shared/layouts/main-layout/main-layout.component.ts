import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

/**
 *
 *  <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2
        class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
      >
        About
      </h2>
    </div>
 */
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <div class="container mx-auto h-screen py-20">
      <router-outlet><ng-content></ng-content></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class MainLayoutComponent {}
