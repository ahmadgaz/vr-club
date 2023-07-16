import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type ContextPropsPartial = {
  heroHeight: { height: number; pos: number };
  aboutUsHeight: { height: number; pos: number };
  equipmentHeight: { height: number; pos: number };
  meetOurTeamHeight: { height: number; pos: number };
  projectsHeight: { height: number; pos: number };
  eventsHeight: { height: number; pos: number };
  resourcesHeight: { height: number; pos: number };
}

type ContextProps = {
  scrollPosition: number;
  heroHeight: { height: number; pos: number };
  aboutUsHeight: { height: number; pos: number };
  equipmentHeight: { height: number; pos: number };
  meetOurTeamHeight: { height: number; pos: number };
  projectsHeight: { height: number; pos: number };
  eventsHeight: { height: number; pos: number };
  resourcesHeight: { height: number; pos: number };
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
  setHeroHeight: React.Dispatch<
    React.SetStateAction<{ height: number; pos: number }>
  >;
  setAboutUsHeight: React.Dispatch<
    React.SetStateAction<{ height: number; pos: number }>
  >;
  setEquipmentHeight: React.Dispatch<
    React.SetStateAction<{ height: number; pos: number }>
  >;
  setMeetOurTeamHeight: React.Dispatch<
    React.SetStateAction<{ height: number; pos: number }>
  >;
  setProjectsHeight: React.Dispatch<
    React.SetStateAction<{ height: number; pos: number }>
  >;
  setEventsHeight: React.Dispatch<
    React.SetStateAction<{ height: number; pos: number }>
  >;
  setResourcesHeight: React.Dispatch<
    React.SetStateAction<{ height: number; pos: number }>
  >;
};

// Define a default context value
const defaultContextValue: ContextProps = {
  scrollPosition: 0,
  heroHeight: { height: 2000, pos: 0 },
  aboutUsHeight: { height: 2000, pos: 2000 },
  equipmentHeight: { height: 2000, pos: 4000 },
  meetOurTeamHeight: { height: 2000, pos: 6000 },
  projectsHeight: { height: 2000, pos: 8000 },
  eventsHeight: { height: 2000, pos: 10000 },
  resourcesHeight: { height: 2000, pos: 12000 },
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
  const [heroHeight, setHeroHeight] = useState<{ height: number; pos: number }>(
    { height: 2000, pos: 0 }
  );
  const [aboutUsHeight, setAboutUsHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 2000, pos: 2000 });
  const [equipmentHeight, setEquipmentHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 2000, pos: 4000 });
  const [meetOurTeamHeight, setMeetOurTeamHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 2000, pos: 6000 });
  const [projectsHeight, setProjectsHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 2000, pos: 8000 });
  const [eventsHeight, setEventsHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 2000, pos: 10000 });
  const [resourcesHeight, setResourcesHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 2000, pos: 12000 });

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
