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
};

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
  apiLoading: boolean[];
  setApiLoading: React.Dispatch<React.SetStateAction<boolean[]>>;
};

// Define a default context value
const defaultContextValue: ContextProps = {
  scrollPosition: 0,
  heroHeight: { height: 500, pos: 0 },
  aboutUsHeight: { height: 500, pos: 500 },
  equipmentHeight: { height: 500, pos: 1000 },
  meetOurTeamHeight: { height: 500, pos: 1500 },
  projectsHeight: { height: 500, pos: 2000 },
  eventsHeight: { height: 500, pos: 2500 },
  resourcesHeight: { height: 500, pos: 3000 },
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
  apiLoading: [],
  setApiLoading: () => {
    return;
  },
};

const AppContext = createContext<ContextProps>(defaultContextValue);

export function AppWrapper({ children }: { children: ReactNode }) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [heroHeight, setHeroHeight] = useState<{ height: number; pos: number }>(
    { height: 500, pos: 0 }
  );
  const [aboutUsHeight, setAboutUsHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 500, pos: 500 });
  const [equipmentHeight, setEquipmentHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 500, pos: 1000 });
  const [meetOurTeamHeight, setMeetOurTeamHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 500, pos: 1500 });
  const [projectsHeight, setProjectsHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 500, pos: 2000 });
  const [eventsHeight, setEventsHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 500, pos: 2500 });
  const [resourcesHeight, setResourcesHeight] = useState<{
    height: number;
    pos: number;
  }>({ height: 500, pos: 3000 });
  const [apiLoading, setApiLoading] = useState<boolean[]>([]);

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
        apiLoading,
        setApiLoading,
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
