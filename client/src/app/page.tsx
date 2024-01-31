import Link from "next/link";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  DownloadIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import Box from "~/components/box";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center">
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-5 text-white">
        <div className="flex flex-col items-center justify-center gap-2 px-7 py-4 text-center">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span>Available for work</span>
          </div>
          <h1 className="inset-3 text-4xl font-semibold tracking-wider md:text-5xl lg:text-6xl">
            Full-Stack Developer
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <Box className="bg-cyan-600">
            <div className="flex gap-2">
              <Link href="https://github.com/cesarclarosns" target="_blank">
                <GitHubLogoIcon className="h-5 w-5 animate-bounce hover:[animation-play-state:paused]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/cesarclarosns/"
                target="_blank"
              >
                <LinkedInLogoIcon className="h-5 w-5 animate-bounce delay-300" />
              </Link>
              <Link
                href="https://www.instagram.com/cesarclarosns"
                target="_blank"
              >
                <InstagramLogoIcon className="h-5 w-5 animate-bounce delay-500" />
              </Link>
            </div>
          </Box>

          <Box className="bg-cyan-500">
            <Link
              href="/assets/cv-eng.pdf"
              target="_blank"
              className="flex items-center gap-2 font-semibold"
            >
              Resume <DownloadIcon className="h-4 w-4 animate-bounce" />
            </Link>
          </Box>
        </div>
      </div>
    </main>
  );
}
