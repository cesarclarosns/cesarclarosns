import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li class="hover:cursor-pointer my-1">
        <a class="group transition-all duration-300 ease-in-out" href="#about">
          <span
            class="bg-left-bottom bg-gradient-to-r from-secondary-focus to-secondary-focus bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          >
            ACERCA DE MÍ
          </span>
        </a>
      </li>
      <li class="hover:cursor-pointer my-1">
        <a
          class="group transition-all duration-300 ease-in-out"
          href="https://1drv.ms/b/s!An6BApy0kuTykgtJeZau8EEBF2jL?e=HVybfp"
          target="_blank"
        >
          <span
            class="bg-left-bottom bg-gradient-to-r from-secondary-focus to-secondary-focus bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          >
            CV
          </span>
        </a>
      </li>
      <li class="hover:cursor-pointer my-1">
        <a
          class="group transition-all duration-300 ease-in-out"
          href="#experience"
        >
          <span
            class="bg-left-bottom bg-gradient-to-r from-secondary-focus to-secondary-focus bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          >
            EXPERIENCIA
          </span>
        </a>
      </li>
      <li class="hover:cursor-pointer my-1">
        <a
          class="group transition-all duration-300 ease-in-out"
          href="#projects"
        >
          <span
            class="bg-left-bottom bg-gradient-to-r from-secondary-focus to-secondary-focus bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          >
            PROYECTOS
          </span>
        </a>
      </li>
    </ul>
  `,
  styles: [],
})
export class SectionsComponent {
  @Input() aboutRef = null;
  @Input() experienceRef = null;
  @Input() projectsRef = null;

  constructor() {}
}
