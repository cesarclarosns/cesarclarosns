import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowTopRightIconComponent } from '../shared/icons/arrow-top-right-icon/arrow-top-right-icon.component';
import { GithubLogoIconComponent } from '../shared/icons/github-logo-icon/github-logo-icon.component';

interface Project {
  title: string;
  description: string;
  url?: string;
  repoUrl?: string;
  hardSkills: { title: string; skills: { title: string; url?: string }[] }[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ArrowTopRightIconComponent, GithubLogoIconComponent],
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Chatto',
      url: 'https://chatto.cesarclarosns.com',
      repoUrl: 'https://github.com/cesarclarosns/chatto',
      description: `Chat virtual aleatorio, así es, parecido a Omegle, con la diferencia de que podrás tener listas de amigos y la opción de filtrar el chat virtual para poder conversar con algún tipo de persona, por ejemplo, con algún trastorno del habla.`,
      hardSkills: [
        {
          title: 'Lenguajes',
          skills: [
            {
              title: 'Node/TypeScript',
            },
          ],
        },
        {
          title: 'Frameworks',
          skills: [
            {
              title: 'Angular',
            },
            {
              title: 'NestJS',
            },
          ],
        },
        {
          title: 'Base de datos',
          skills: [
            {
              title: 'PostgreSQL (TimescaleDB)',
            },
          ],
        },
        {
          title: 'Herramientas de CI/CD',
          skills: [
            {
              title: 'GitHub',
            },
            {
              title: 'GitHub Actions',
            },
          ],
        },
        {
          title: 'Servicios de AWS',
          skills: [
            {
              title: 'EC2',
            },
            {
              title: 'S3',
            },
            {
              title: 'SES',
            },
            {
              title: 'Route53',
            },
          ],
        },
        {
          title: 'Otras tecnologías y herramieyntas',
          skills: [
            {
              title: 'Docker',
            },
            {
              title: 'LiveKit',
            },
            {
              title: 'Traefik',
            },
            {
              title: 'Stripe',
            },
          ],
        },
      ],
    },
    {
      title: 'Splendor Clothing',
      url: 'https://splendorclothing.cesarclarosns.com',
      repoUrl: 'https://github.com/cesarclarosns/splendor-clothing',
      description: `E-commerce de moda.`,
      hardSkills: [
        {
          title: 'Lenguajes',
          skills: [
            {
              title: 'Node/JavaScript',
            },
          ],
        },
        {
          title: 'Frameworks',
          skills: [
            {
              title: 'React',
            },
            {
              title: 'Express',
            },
          ],
        },
        {
          title: 'Base de datos',
          skills: [
            {
              title: 'Firebase (Firestore)',
            },
          ],
        },
        {
          title: 'Herramientas de CI/CD',
          skills: [
            {
              title: 'GitHub',
            },
            {
              title: 'GitHub Actions',
            },
          ],
        },
        {
          title: 'Servicios de AWS',
          skills: [
            {
              title: 'EC2',
            },
            {
              title: 'Route53',
            },
          ],
        },
        {
          title: 'Otras tecnologías y herramientas',
          skills: [
            {
              title: 'Docker',
            },
            {
              title: 'Traefik',
            },
            {
              title: 'Firebase',
            },
            {
              title: 'Stripe',
            },
          ],
        },
      ],
    },
  ];
}
