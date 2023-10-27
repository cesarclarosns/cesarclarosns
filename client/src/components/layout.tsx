/* eslint-disable @typescript-eslint/no-empty-interface */
"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import Header from "@/components/header";
import { type ClassValue, clsx } from "clsx";
import useRandomColorClass from "@/hooks/use-random-color-class";

interface ILayoutProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Layout = React.forwardRef<HTMLDivElement, ILayoutProps>(
  ({ children, className, ...props }, ref) => {
    const { colorClass } = useRandomColorClass({});

    return (
      <div
        {...props}
        className={cn("flex min-h-screen flex-col", className, colorClass)}
        ref={ref}
      >
        <Header></Header>
        <div className={cn("container flex min-h-screen flex-col")}>
          {children}
        </div>
      </div>
    );
  },
);
Layout.displayName = "Layout";

export default Layout;
