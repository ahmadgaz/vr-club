import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ContextProps = {
  scrollPosition: number;
  heroHeight: number;
  aboutUsHeight: number;
  equipmentHeight: number;
  meetOurTeamHeight: number;
  projectsHeight: number;
  eventsHeight: number;
  resourcesHeight: number;
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
  setHeroHeight: React.Dispatch<React.SetStateAction<number>>;
  setAboutUsHeight: React.Dispatch<React.SetStateAction<number>>;
  setEquipmentHeight: React.Dispatch<React.SetStateAction<number>>;
  setMeetOurTeamHeight: React.Dispatch<React.SetStateAction<number>>;
  setProjectsHeight: React.Dispatch<React.SetStateAction<number>>;
  setEventsHeight: React.Dispatch<React.SetStateAction<number>>;
  setResourcesHeight: React.Dispatch<React.SetStateAction<number>>;
};

// Define a default context value
const defaultContextValue: ContextProps = {
  scrollPosition: 0,
  heroHeight: 2000,
  aboutUsHeight: 2000,
  equipmentHeight: 2000,
  meetOurTeamHeight: 2000,
  projectsHeight: 2000,
  eventsHeight: 2000,
  resourcesHeight: 2000,
  setScrollPosition: () => {
    return;
  }, // empty function, it will be replaced by the actual function in the provider
  setHeroHeight: () => {
    return;
  },
  setAboutUsHeight: () => {
    return;
  },
  setEquipmentHeight: () => {
    return;
  },
  setMeetOurTeamHeight: () => {
    return;
  },
  setProjectsHeight: () => {
    return;
  },
  setEventsHeight: () => {
    return;
  },
  setResourcesHeight: () => {
    return;
  },
};

const AppContext = createContext<ContextProps>(defaultContextValue);

export function AppWrapper({ children }: { children: ReactNode }) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [heroHeight, setHeroHeight] = useState<number>(2000);
  const [aboutUsHeight, setAboutUsHeight] = useState<number>(2000);
  const [equipmentHeight, setEquipmentHeight] = useState<number>(2000);
  const [meetOurTeamHeight, setMeetOurTeamHeight] = useState<number>(2000);
  const [projectsHeight, setProjectsHeight] = useState<number>(2000);
  const [eventsHeight, setEventsHeight] = useState<number>(2000);
  const [resourcesHeight, setResourcesHeight] = useState<number>(2000);

  return (
    <AppContext.Provider
      value={{
        scrollPosition,
        heroHeight,
        aboutUsHeight,
        equipmentHeight,
        meetOurTeamHeight,
        projectsHeight,
        eventsHeight,
        resourcesHeight,
        setScrollPosition,
        setHeroHeight,
        setAboutUsHeight,
        setEquipmentHeight,
        setMeetOurTeamHeight,
        setProjectsHeight,
        setEventsHeight,
        setResourcesHeight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): ContextProps {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}
