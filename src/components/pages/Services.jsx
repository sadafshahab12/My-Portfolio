import { useEffect } from "react";
import PageHeader from "../ui/PageHeader";
import Service from "../ui/Service";

const Services = () => {
  useEffect(() => {
    document.title = "Services | Portfolio";
  }, []);
  return (
    <div>
      <PageHeader home={"Home"} page={"Services"} link={"/services"} />
      <Service />
    </div>
  );
};

export default Services;
