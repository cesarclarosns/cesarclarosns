"use client";

import useRandomColorClass from "@/hooks/use-random-color-class";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AboutPage() {
  const { colorClass } = useRandomColorClass({});

  const content: {
    about: string[];
    skills: { title: string; content: string }[];
    certifications: { title: string; url: string }[];
  } = {
    about: [
      "I’m a Full-Stack Developer and Engineer based in Mexico, up until now I’ve had the opportunity of doing Frontend and Backend Development, DevOps and Infrastructure.",
      "I’m just a human being very interested in creating products that live on the internet.",
    ],
    skills: [
      {
        title: "Programming languages:",
        content: "NodeJS/JavaScript/Typescript, Python and PHP.",
      },
      {
        title: "Frameworks:",
        content:
          "React (NextJS), Angular, ExpressJS, NestJS, FastAPI and Laravel.",
      },
      {
        title: "Databases:",
        content: "MySQL, SQLServer, MongoDB and Firebase.",
      },
      {
        title: "Cloud:",
        content: "AWS.",
      },
      {
        title: "CI/CD tools:",
        content:
          "Github, Gitlab, Bitbucket, CodeCommit, CodePipeline, CodeBuild, CodeCommit and ArgoCD.",
      },
      {
        title: "Other technologies, services and tools:",
        content: "Docker, Kubernetes, Stripe, Kustomize and Figma.",
      },
      {
        title: "Languages:",
        content: "Spanish (Native) and English (C1).",
      },
    ],
    certifications: [
      {
        title: "AWS Certified Developer - Associate",
        url: "https://www.credly.com/badges/9d91fb67-9e7a-4ff5-a4f7-ebf70d9f25dc/linked_in_profile",
      },
    ],
  };

  return (
    <div className={cn("flex min-h-screen flex-col px-5 py-20", colorClass)}>
      <div className="flex flex-1 flex-col gap-20 text-left md:flex-row">
        <div className="flex flex-col gap-4 text-2xl font-extrabold md:basis-1/2">
          {content.about.map((p, i) => (
            <div key={i}>
              <span>{p}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 md:basis-1/2">
          <div className="flex flex-col gap-5">
            <p className=" font-bold underline">Certifications</p>
            <div className="flex flex-col gap-2">
              {content.certifications.map((certification, i) => (
                <div key={i}>
                  <Link
                    href={certification.url}
                    target="_blank"
                    className="hover:underline"
                  >
                    <span className="font-medium">{certification.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className=" font-bold underline">Skills</p>
            <div className="flex flex-col gap-2">
              {content.skills.map((skill, i) => (
                <div key={i}>
                  <p className="font-medium">{skill.title}</p>
                  <p>{skill.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
