"use client";

import Icons from "@/components/ui/icons";
import useRandomColorClass from "@/hooks/use-random-color-class";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Job {
  role: string;
  at: string;
  url: string;
  period: string;
  description: string[];
  skills: { title: string; content: string }[];
}

export default function WorkPage() {
  const jobs: Job[] = [
    {
      role: "Full-Stack Developer",
      at: "at Radar",
      url: "https://www.radarholding.com",
      period: "(Apr 2022 - Aug 2023)",
      description: [
        "I collaborated in the analysis, design, development and implementation of web applications that facilitated the company's day-to-day commercial operations, ranging from the management of stages of the company's operation processes and real-time communication to the generation of reports. Doing Front-end and Back-end development, and automations with Node/JavaScript/TypeScript, Python and PHP, using frameworks such as Angular, Express, NestJS, FastAPI and Laravel.",
        "In addition, I also collaborated in the analysis, design, development and implementation of DevOps and a new Infrastructure in AWS for the better management of the applications and services that are used every day in the company.",
      ],
      skills: [
        {
          title: "Programming languages:",
          content: "NodeJS/JavaScript/TypeScript, Python and PHP.",
        },
        {
          title: "Frameworks:",
          content: "Angular, ExpressJS, NestJS, FastAPI and Laravel.",
        },
        {
          title: "Databases:",
          content: "MySQL and SQLServer.",
        },
        {
          title: "Cloud:",
          content: "AWS.",
        },
        {
          title: "CI/CD tools:",
          content:
            "Gitlab, Bitbucket, CodeCommit, CodePipeline, CodeBuild, CodeCommit and ArgoCD.",
        },
        {
          title: "Other technologies and tools:",
          content: "Docker, Kubernetes, Kustomize and Figma.",
        },
      ],
    },
  ];

  const { colorClass } = useRandomColorClass({});

  return (
    <div className={cn("flex min-h-screen flex-col px-5 py-20", colorClass)}>
      <div className="flex flex-col gap-20">
        {jobs.map((job, i) => {
          return (
            <>
              <div key={i} className="flex flex-col gap-10 md:flex-row">
                <div className="flex flex-col gap-5 md:basis-1/2">
                  <div>
                    <p className="text-2xl font-bold">{job.role}</p>
                    <div className="flex items-center gap-2 text-2xl font-bold">
                      <p>{job.at}</p>
                      <Link href={job.url} target="_blank">
                        <Icons.ExternalLinkIcon></Icons.ExternalLinkIcon>
                      </Link>
                    </div>
                    <p className="font-medium">{job.period}</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    {job.description.map((d, i) => (
                      <div key={i}>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-10 md:basis-1/2">
                  <div className="flex flex-col gap-5">
                    <p className=" font-bold underline">Skills</p>
                    <div className="flex flex-col gap-2">
                      {job.skills.map((skill, i) => (
                        <div key={i}>
                          <p className="font-medium">{skill.title}</p>
                          <p>{skill.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
