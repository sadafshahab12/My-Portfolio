import { useEffect } from "react";
import PageHeader from "../ui/PageHeader";
import Project from "../ui/Project";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Portfolio";
  }, []);
  return (
    <div>
      <PageHeader home={"Home"} page={"Portfolio"} link={"/portfolio"} />
      <Project />
    </div>
  );
};

export default Portfolio;
