"use client";

import { SectionName } from "@/lib/data";
import { useState, createContext, useContext } from "react";

export const ActiveSectionContext = createContext<{
  activeSection: SectionName;
  setActiveSection: (section: SectionName, setTime?: boolean) => void;
  enableObserver: () => boolean;
} | null>(null);

type Props = { children: React.ReactNode };

const ActiveSectionContextProvider = ({ children }: Props) => {
  const [activeSection, setActiveSection] = useState<SectionName>("home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection: (section, setTime = true) => {
          setActiveSection(section);
          if (setTime) setTimeOfLastClick(Date.now());
        },
        enableObserver: () => Date.now() - timeOfLastClick > 1000,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context == null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }

  return context;
}
