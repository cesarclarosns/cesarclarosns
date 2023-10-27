"use client";

import useRandomColorClass from "@/hooks/use-random-color-class";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const { colorClass } = useRandomColorClass({});

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center px-5 py-20 text-center",
        colorClass,
      )}
    >
      <p className="text-3xl font-bold">
        Sumimasen!, this page is not available...
      </p>
    </div>
  );
}
