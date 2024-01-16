import Head from "next/head";
import React from "react";
import ProjectsComponent from "~/components/projects/projects/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta content="VR-Club - Projects" />
      </Head>
      <main className="relative flex min-h-[95vh] min-w-full flex-col">
        <ProjectsComponent />
      </main>
    </>
  );
}
