import AboutMe from "../ui/AboutMe";
import Hero from "../ui/Hero";
import ProjectStats from "../ui/ProjectStats";
import Services from "../ui/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services/>
      <ProjectStats/>
    </div>
  );
};

export default Home;
