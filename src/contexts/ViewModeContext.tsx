import { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "plain" | "technical";

interface ViewModeContextType {
  mode: ViewMode;
  toggle: () => void;
  isPlain: boolean;
}

const ViewModeContext = createContext<ViewModeContextType>({
  mode: "plain",
  toggle: () => {},
  isPlain: true,
});

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ViewMode>("plain");
  const toggle = () => setMode((m) => (m === "plain" ? "technical" : "plain"));
  return (
    <ViewModeContext.Provider value={{ mode, toggle, isPlain: mode === "plain" }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export const useViewMode = () => useContext(ViewModeContext);
