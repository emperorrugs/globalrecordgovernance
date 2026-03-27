import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    setPhase("exit");
    const t = setTimeout(() => {
      setDisplayChildren(children);
      setPhase("enter");
    }, 200);
    return () => clearTimeout(t);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",
        phase === "enter" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      )}
    >
      {displayChildren}
    </div>
  );
}
