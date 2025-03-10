import AboutMe from "../ui/AboutMe";
import Hero from "../ui/Hero";
import PricePlan from "../ui/PricePlan";
import Project from "../ui/Project";
import ProjectStats from "../ui/ProjectStats";
import Services from "../ui/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services/>
      <ProjectStats/>
      <Project/>
      <PricePlan/>
    </div>
  );
};

export default Home;
