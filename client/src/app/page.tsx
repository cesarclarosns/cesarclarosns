"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icons from "@/components/ui/icons";
import useRandomColorClass from "@/hooks/use-random-color-class";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  const { colorClass } = useRandomColorClass({});
  return (
    <>
      <main
        className={cn(
          "flex min-h-screen flex-col items-center justify-center gap-5 text-center",
          colorClass,
        )}
      >
        <div>
          <p className="px-4 text-4xl font-bold md:text-6xl">
            FULL-STACK DEVELOPER AND ENGINEER
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 rounded-full border-2 border-solid border-black px-4 py-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          AVAILABLE FOR WORK
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link
            href={"https://www.linkedin.com/in/cesarclarosns"}
            target="_blank"
          >
            <Icons.LinkedInLogoIcon className="h-8 w-8"></Icons.LinkedInLogoIcon>
          </Link>
          <Link href={"https://www.github.com/cesarclarosns"} target="_blank">
            <Icons.GitHubLogoIcon className="h-8 w-8"></Icons.GitHubLogoIcon>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-white">
                CV
                <Icons.DownloadIcon className="h-4 w-4"></Icons.DownloadIcon>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="hover:cursor-pointer">
                <Link href={"/assets/pdfs/cv-esp.pdf"} target="_blank">
                  Español
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                <Link href={"/assets/pdfs/cv-eng.pdf"} target="_blank">
                  English
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </main>
    </>
  );
}
