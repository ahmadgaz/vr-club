import { resourcesRouter } from "~/server/api/routers/resources";
import { eventsRouter } from "~/server/api/routers/events";
import { projectsRouter } from "~/server/api/routers/projects";
import { meetOurTeamRouter } from "~/server/api/routers/meetOurTeam";
import { equipmentRouter } from "~/server/api/routers/equipment";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  equipment: equipmentRouter,
  meetOurTeam: meetOurTeamRouter,
  projects: projectsRouter,
  events: eventsRouter,
  resources: resourcesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
