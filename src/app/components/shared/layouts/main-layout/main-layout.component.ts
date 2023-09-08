import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <div class="container mx-auto h-screen py-40">
      <router-outlet><ng-content></ng-content></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class MainLayoutComponent {}
