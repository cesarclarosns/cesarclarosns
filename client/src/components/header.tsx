/* eslint-disable react/no-unescaped-entities */
"use client";

import useRandomColorClass from "@/hooks/use-random-color-class";
import { cn } from "@/lib/utils";
import Icons from "@/components/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "./ui/use-toast";

interface Link {
  path: string;
  name: string;
  selected: boolean;
}

const Header = () => {
  const [links, setLinks] = useState<Link[]>([
    {
      path: "/about",
      name: "ABOUT",
      selected: false,
    },
    {
      path: "/work",
      name: "WORK",
      selected: false,
    },
    {
      path: "/blog",
      name: "BLOG",
      selected: false,
    },
    {
      path: "/projects",
      name: "PROJECTS",
      selected: false,
    },
  ]);

  const email = "cesarclarosns@gmail.com";
  const { colorClass } = useRandomColorClass({});
  const { colorClass: colorClassSheet } = useRandomColorClass({});
  const { toast } = useToast();

  const pathname = usePathname();

  useLayoutEffect(() => {
    setLinks((prev) => {
      prev = prev.map((link) => {
        link.selected = false;
        if (pathname.includes(link.path)) link.selected = true;
        return link;
      });
      return prev;
    });
  }, [pathname]);

  const handleOnCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    toast({
      title: "Copied to clipboard!",
      className: "bg-black text-white",
    });
  };

  return (
    <div className={cn(" sticky top-0 px-2 py-4", colorClass)}>
      <nav className="container flex items-center justify-between">
        <div className="flex gap-10">
          <div className="font-bold">
            <Link href={"/"}>CÉSAR CLAROS</Link>
          </div>
          <div className="hidden gap-4 lg:flex">
            {links.map((link) => {
              return (
                <Link
                  href={link.path}
                  key={link.name}
                  className={cn(
                    "hover:underline",
                    link.selected && "underline",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-4 lg:hidden">
            {links.map((link) => {
              return (
                <Link
                  href={link.path}
                  key={link.name}
                  className={cn(
                    "hover:underline",
                    link.selected && "underline",
                    !link.selected && "hidden",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="flex items-center gap-2">
            <span className="font-medium">LET'S CONNECT</span>
            <div
              className="flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-2 text-white hover:cursor-pointer"
              onClick={handleOnCopyEmail}
            >
              <span>{email}</span>
              <Icons.CopyIcon></Icons.CopyIcon>
            </div>
          </div>
        </div>

        <Sheet>
          <SheetTrigger className="flex lg:hidden">
            <div className="hover:cursor-pointer ">
              <Icons.HamburgerMenuIcon></Icons.HamburgerMenuIcon>
            </div>
          </SheetTrigger>
          <SheetContent
            className={cn(
              "flex h-screen w-screen flex-col items-center justify-center gap-10",
              colorClassSheet,
            )}
          >
            {links.map((link) => {
              return (
                <Link
                  href={link.path}
                  key={link.name}
                  className={cn(
                    "text-xl font-bold hover:underline",
                    link.selected && "underline",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}

            <div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">LET'S CONNECT</span>
                <div
                  className="flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-2 text-white hover:cursor-pointer"
                  onClick={handleOnCopyEmail}
                >
                  <span>{email}</span>
                  <Icons.CopyIcon></Icons.CopyIcon>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Header;
