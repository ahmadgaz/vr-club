import Head from "next/head";
import React, { lazy, Suspense } from "react";

const ProjectsComponent = lazy(
  () => import("~/components/projects/projects/projects")
);

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta content="VR-Club - Projects" />
      </Head>
      <main className="relative flex min-h-[95vh] min-w-full flex-col">
        <Suspense>
          <ProjectsComponent />
        </Suspense>
      </main>
    </>
  );
}
