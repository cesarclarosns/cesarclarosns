import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { SectionsComponent } from 'src/app/components/sections/sections.component';
import { SocialComponent } from 'src/app/components/social/social.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MainLayoutComponent } from 'src/app/components/shared/layouts/main-layout/main-layout.component';

import { animate } from 'motion';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SectionsComponent,
    SocialComponent,
    FooterComponent,
    MainLayoutComponent,
  ],
  templateUrl: './home-page.component.html',
  styles: [],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('sections') sectionsRef!: ElementRef;

  @ViewChild('about') aboutRef!: ElementRef;
  @ViewChild('experience') experienceRef!: ElementRef;
  @ViewChild('projects') projectsRef!: ElementRef;

  constructor() {}

  animate() {
    animate(this.aboutRef.nativeElement);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log({
    //   sections: this.sectionsRef,
    //   aboutRef: this.aboutRef,
    //   experienceRef: this.experienceRef,
    //   projectsRef: this.projectsRef,
    // });
  }

  showRefs() {
    console.log({
      home: '',
      aboutRef: this.aboutRef,
      experienceRef: this.experienceRef,
      projectsRef: this.projectsRef,
    });
  }
}
