import Head from "next/head";
import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useAppContext } from "~/context/context";
import { set, throttle } from "lodash";

const Bg = lazy(() => import("~/components/bg"));
const Hero = lazy(() => import("~/components/home/hero/hero"));
const AboutUs = lazy(() => import("~/components/about/aboutUs/aboutUs"));
const Equipment = lazy(() => import("~/components/about/equipment/equipment"));
const MeetOurTeam = lazy(
  () => import("~/components/about/meetOurTeam/meetOurTeam")
);
const Projects = lazy(() => import("~/components/projects/projects/projects"));
const Events = lazy(() => import("~/components/events/events/events"));
const Resources = lazy(
  () => import("~/components/resources/resources/resources")
);
const Footer = lazy(() => import("~/components/footer"));

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
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
  } = useAppContext();

  const handleSetHeroHeight = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        setHeroHeight({ height: node?.offsetHeight, pos: 0 });
      }
    },
    [setHeroHeight]
  );
  const handleSetAboutUsHeight = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        setAboutUsHeight({
          height: node?.offsetHeight,
          pos: heroHeight.height,
        });
      }
    },
    [setAboutUsHeight, heroHeight.height]
  );
  const handleSetEquipmentHeight = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        setEquipmentHeight({
          height: node?.offsetHeight,
          pos: heroHeight.height + aboutUsHeight.height,
        });
      }
    },
    [setEquipmentHeight, heroHeight.height, aboutUsHeight.height]
  );
  const handleSetMeetOurTeamHeight = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        setMeetOurTeamHeight({
          height: node?.offsetHeight,
          pos:
            heroHeight.height + aboutUsHeight.height + equipmentHeight.height,
        });
      }
    },
    [
      setMeetOurTeamHeight,
      heroHeight.height,
      aboutUsHeight.height,
      equipmentHeight.height,
    ]
  );
  const handleSetProjectsHeight = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        setProjectsHeight({
          height: node?.offsetHeight,
          pos:
            heroHeight.height +
            aboutUsHeight.height +
            equipmentHeight.height +
            meetOurTeamHeight.height,
        });
      }
    },
    [
      setProjectsHeight,
      heroHeight.height,
      aboutUsHeight.height,
      equipmentHeight.height,
      meetOurTeamHeight.height,
    ]
  );
  const handleSetEventsHeight = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        setEventsHeight({
          height: node?.offsetHeight,
          pos:
            heroHeight.height +
            aboutUsHeight.height +
            equipmentHeight.height +
            meetOurTeamHeight.height +
            projectsHeight.height,
        });
      }
    },
    [
      setEventsHeight,
      heroHeight.height,
      aboutUsHeight.height,
      equipmentHeight.height,
      meetOurTeamHeight.height,
      projectsHeight.height,
    ]
  );
  const handleSetResourcesHeight = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        setResourcesHeight({
          height: node?.offsetHeight,
          pos:
            heroHeight.height +
            aboutUsHeight.height +
            equipmentHeight.height +
            meetOurTeamHeight.height +
            projectsHeight.height +
            eventsHeight.height,
        });
      }
    },
    [
      setResourcesHeight,
      heroHeight.height,
      aboutUsHeight.height,
      equipmentHeight.height,
      meetOurTeamHeight.height,
      projectsHeight.height,
      eventsHeight.height,
    ]
  );

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPosition(window.scrollY + window.innerHeight);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollPosition]);

  const [showAll, setShowAll] = useState<boolean>(false);
  useEffect(() => {
    setScrollPosition(window.scrollY + window.innerHeight);
    console.log(apiLoading);
    if (apiLoading.length >= 5) {
      setShowAll(true);
      setTimeout(() => {
        setShowAll(false);
      }, 500);
    }
  }, [isClient, setScrollPosition, apiLoading]);

  return (
    <>
      <Head>
        <title>VR Club SJSU</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="relative flex min-h-[100dvh] min-w-full flex-col">
        {isClient && (
          <Suspense>
            <Bg />
            <div
              ref={handleSetHeroHeight}
              style={{
                opacity:
                  showAll ||
                  (scrollPosition >= heroHeight.pos &&
                    scrollPosition - window.innerHeight <
                      heroHeight.pos + heroHeight.height)
                    ? "100%"
                    : "100%",
              }}
              className="transition-opacity duration-[500ms] ease-in-out"
            >
              <Hero />
            </div>
            <div
              ref={handleSetAboutUsHeight}
              style={{
                opacity:
                  showAll ||
                  (scrollPosition > aboutUsHeight.pos &&
                    scrollPosition - window.innerHeight <
                      aboutUsHeight.pos + aboutUsHeight.height)
                    ? "100%"
                    : "100%",
              }}
              className="transition-opacity duration-[500ms] ease-in-out"
            >
              <AboutUs />
            </div>
            <div
              ref={handleSetEquipmentHeight}
              style={{
                opacity:
                  showAll ||
                  (scrollPosition > equipmentHeight.pos &&
                    scrollPosition - window.innerHeight <
                      equipmentHeight.pos + equipmentHeight.height)
                    ? "100%"
                    : "100%",
              }}
              className="transition-opacity duration-[500ms] ease-in-out"
            >
              <Equipment />
            </div>
            <div
              ref={handleSetMeetOurTeamHeight}
              style={{
                opacity:
                  showAll ||
                  (scrollPosition > meetOurTeamHeight.pos &&
                    scrollPosition - window.innerHeight <
                      meetOurTeamHeight.pos + meetOurTeamHeight.height)
                    ? "100%"
                    : "100%",
              }}
              className="transition-opacity duration-[500ms] ease-in-out"
            >
              <MeetOurTeam />
            </div>
            <div
              ref={handleSetProjectsHeight}
              style={{
                opacity:
                  showAll ||
                  (scrollPosition > projectsHeight.pos &&
                    scrollPosition - window.innerHeight <
                      projectsHeight.pos + projectsHeight.height)
                    ? "100%"
                    : "100%",
              }}
              className="transition-opacity duration-[500ms] ease-in-out"
            >
              <Projects />
            </div>
            <div
              ref={handleSetEventsHeight}
              style={{
                opacity:
                  showAll ||
                  (scrollPosition > eventsHeight.pos &&
                    scrollPosition - window.innerHeight <
                      eventsHeight.pos + eventsHeight.height)
                    ? "100%"
                    : "100%",
              }}
              className="transition-opacity duration-[500ms] ease-in-out"
            >
              <Events />
            </div>
            <div
              ref={handleSetResourcesHeight}
              style={{
                opacity:
                  showAll ||
                  (scrollPosition > resourcesHeight.pos &&
                    scrollPosition - window.innerHeight <
                      resourcesHeight.pos + resourcesHeight.height)
                    ? "100%"
                    : "100%",
              }}
              className="transition-opacity duration-[500ms] ease-in-out"
            >
              <Resources />
            </div>
            <Footer />
          </Suspense>
        )}
      </main>
    </>
  );
}
