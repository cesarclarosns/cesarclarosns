import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowTopRightIconComponent } from '../shared/icons/arrow-top-right-icon/arrow-top-right-icon.component';

interface Project {
  title: string;
  description: string;
  link?: string;
  hardSkills: { title: string; skills: { title: string; url?: string }[] }[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ArrowTopRightIconComponent],
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Chatto',
      link: 'https://chatto.cesarclarsons.com',
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
          title: 'Otras tecnologías y herramientas',
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
          ],
        },
      ],
    },
    {
      title: 'Splendor Clothing',
      link: 'https://splendorclothing.cesarclarosns.com',
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
