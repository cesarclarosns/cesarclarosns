import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowTopRightIconComponent } from '../shared/icons/arrow-top-right-icon/arrow-top-right-icon.component';

interface JobExperience {
  period: string;
  title: string;
  description: string;
  link: string;
  hardSkills: { title: string; skills: { title: string; url?: string }[] }[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ArrowTopRightIconComponent],
  templateUrl: './experience.component.html',
  styles: [],
})
export class ExperienceComponent {
  experiences: JobExperience[] = [
    {
      period: 'ABRIL 2022 - AGOSTO 2023',
      title: 'Desarrollador Full-Stack en Radar',
      link: 'https://www.radarholding.com/',
      description: `Colaboré en el análisis, diseño, desarrollo e implementación de aplicaciones web que facilitaron las operaciones comerciales del día a día de la empresa que van desde la gestión de etapas de los procesos de operación de la empresa hasta la generación de reportes. Haciendo desarrollo Front-end y Back-end, y automatizaciones con Node/JavaScript/TypeScript, Python y PHP, usando frameworks como Angular, Express, NestJS, FastAPI y Laravel. Además también colaboré en el análisis, diseño, desarrollo e implementación de DevOps y una nueva Infraestructura en AWS para la mejor gestión de las aplicaciones y servicios que se usan día a día en la empresa.`,
      hardSkills: [
        {
          title: 'Lenguajes',
          skills: [
            {
              title: 'Node/JavaScript/TypeScript',
            },
            {
              title: 'Python',
            },
            { title: 'PHP' },
          ],
        },
        {
          title: 'Frameworks',
          skills: [
            {
              title: 'Angular',
            },
            {
              title: 'Express',
            },
            { title: 'NestJS' },
            { title: 'FastAPI' },
            { title: 'Laravel' },
          ],
        },
        {
          title: 'Bases de datos',
          skills: [
            {
              title: 'MySQL',
            },
            {
              title: 'SQL Server',
            },
          ],
        },
        {
          title: 'Servicios de AWS',
          skills: [
            {
              title: 'EKS',
            },
            {
              title: 'CodePipeline',
            },
            {
              title: 'CodeBuild',
            },
            {
              title: 'CodeCommit',
            },
            {
              title: 'ECR',
            },
            {
              title: 'EKS',
            },
            {
              title: 'ALB',
            },
            {
              title: 'S3',
            },
            {
              title: 'CloudFront',
            },
            {
              title: 'Route53',
            },
            {
              title: 'IAM',
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
              title: 'Kubernetes',
            },
            {
              title: 'ArgoCD',
            },
            {
              title: 'Kustomize',
            },
          ],
        },
      ],
    },
  ];
}
