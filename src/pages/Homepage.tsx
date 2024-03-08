import { BackgroundBeams } from "@/components/Beams";
import React from "react";

const Homepage = () => {
  return (
    <>
      <header className="homepage-header">
        Welcome to <span className="tw-text-lime-600">antsite.xyz</span>
      </header>
      <BackgroundBeams></BackgroundBeams>
    </>
  );
};

export default Homepage;
