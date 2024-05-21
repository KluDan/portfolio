"use client";

import AboutGrid from "@/components/AboutGrid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <AboutGrid />
        <RecentProjects />
      </div>
    </main>
  );
};

export default Home;
