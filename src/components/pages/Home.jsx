import { useEffect } from "react";
import AboutMe from "../ui/AboutMe";
import Hero from "../ui/Hero";
import PricePlan from "../ui/PricePlan";
import Project from "../ui/Project";
import ProjectStats from "../ui/ProjectStats";
import Service from "../ui/Service";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Portfolio";
  }, []);
  return (
    <div>
      <Hero />
      <AboutMe />
      <Service />
      <ProjectStats />
      <Project />
      <PricePlan />
    </div>
  );
};

export default Home;
