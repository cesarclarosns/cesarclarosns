import { cn } from "~/libs/utils";

interface BoxProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export default function Box({ children, className }: BoxProps) {
  return (
    <div className="group relative hover:cursor-pointer">
      <div
        className={cn(
          "absolute -inset-0.5 rounded-md bg-green-200 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200",
          className,
        )}
      />

      <div className="relative flex items-center rounded-lg bg-black px-7 py-4 leading-none">
        {children}
      </div>
    </div>
  );
}
