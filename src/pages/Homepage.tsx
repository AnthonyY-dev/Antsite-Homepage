import { BackgroundBeams } from "@/components/ui/Beams";
import React from "react";

const Homepage = () => {
  return (
    <>
      <header className="homepage-header">
        Welcome to <span className="tw-text-lime-600">antsite.xyz</span>
      </header>
      <BackgroundBeams></BackgroundBeams>
      <div className="section2homepage">
        <div className="section2homepagetext"></div>
        <div className="section2homepagecode"></div>
      </div>
    </>
  );
};

export default Homepage;
