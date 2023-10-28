import { useLayoutEffect, useState } from "react";

const useRandomColorClass = ({ timeout = 3000 }: { timeout?: number }) => {
  const [colorClass, setColorClass] = useState("bg-orange-300");

  useLayoutEffect(() => {
    const colorClasses: string[] = [
      "bg-orange-300",
      "bg-green-400",
      "bg-red-400",
      "bg-blue-400",
      "bg-purple-400",
      "bg-yellow-300",
    ];

    const setRandomColorClass = () => {
      const index = Math.floor(Math.random() * colorClasses.length);
      const randomColorClass = colorClasses[index]!;
      setColorClass(randomColorClass);
    };

    const interval = setInterval(() => {
      setRandomColorClass();
    }, timeout);

    return () => {
      clearInterval(interval);
    };
  }, [timeout]);

  return { colorClass };
};

export default useRandomColorClass;
