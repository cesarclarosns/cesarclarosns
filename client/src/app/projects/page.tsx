"use client";

import Icons from "@/components/ui/icons";
import useRandomColorClass from "@/hooks/use-random-color-class";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Project {
  title: string;
  repo: string;
  url: string;
  description: string[];
  stack: { title: string; content: string }[];
  status?: "released" | "in-progress";
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Chatto",
      status: "in-progress",
      repo: "https://github.com/cesarclarosns/chatto",
      url: "https://chatto.cesarclarosns.com/",
      description: [
        "Random virtual chat, that's right, similar to Omegle, with the difference that you can have lists of friends and the option to filter the virtual chat to be able to chat with some type of person, for example, with a speech disorder.",
      ],
      stack: [
        {
          title: "Frameworks:",
          content: "Angular and NestJS.",
        },
        {
          title: "Databases:",
          content: "PostgreSQL (TimescaleDB).",
        },
        {
          title: "CI/CD tools:",
          content: "Github, Github Actions and Watchtower (Docker).",
        },
        {
          title: "Cloud:",
          content: "AWS.",
        },
        {
          title: "Other technologies and tools:",
          content: "Docker, LiveKit, Traefik and Stripe.",
        },
      ],
    },
    {
      title: "Splendor Clothing",
      status: "released",
      repo: "https://github.com/cesarclarosns/splendor-clothing",
      url: "https://splendorclothing.cesarclarosns.com/",
      description: ["Clothing e-commerce."],
      stack: [
        {
          title: "Frameworks:",
          content: "React and ExpressJS.",
        },
        {
          title: "Databases:",
          content: "Firebase (Firestore).",
        },
        {
          title: "CI/CD tools:",
          content: "Github, Github Actions and Watchtower (Docker).",
        },
        {
          title: "Cloud:",
          content: "AWS.",
        },
        {
          title: "Other technologies and tools:",
          content: "Docker, Traefik and Stripe.",
        },
      ],
    },
  ];

  const { colorClass } = useRandomColorClass({});

  return (
    <div className={cn("flex min-h-screen flex-col px-5 py-20", colorClass)}>
      <div className="flex flex-col gap-20">
        {projects.map((project, i) => {
          return (
            <>
              <div key={i} className="flex flex-col gap-10 md:flex-row">
                <div className="flex flex-col gap-5 md:basis-1/2">
                  <div>
                    <p>
                      <span className="text-2xl font-bold">
                        {project.title}
                      </span>
                      {"  "}
                      <span>
                        {project.status === "in-progress"
                          ? "(In progress)"
                          : "(Released)"}
                      </span>
                    </p>

                    <div className="flex items-center gap-2 text-2xl font-bold">
                      <Link href={project.url} target="_blank">
                        <Icons.ExternalLinkIcon></Icons.ExternalLinkIcon>
                      </Link>

                      <Link href={project.repo} target="_blank">
                        <Icons.GitHubLogoIcon></Icons.GitHubLogoIcon>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    {project.description.map((d, i) => (
                      <div key={i}>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-10 md:basis-1/2">
                  <div className="flex flex-col gap-5">
                    <p className=" font-bold underline">Stack</p>
                    <div className="flex flex-col gap-2">
                      {project.stack.map((skill, i) => (
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
