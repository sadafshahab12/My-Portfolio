import PageHeader from "../ui/PageHeader";
import Project from "../ui/Project";

const Portfolio = () => {
  return (
    <div>
      <PageHeader home={"Home"} page={"Portfolio"} link={"/portfolio"} />
      <Project />
    </div>
  );
};

export default Portfolio;
