import PricePlan from "../ui/PricePlan";
import PageHeader from "../ui/PageHeader";
import { useEffect } from "react";
const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing | Portfolio";
  }, []);
  return (
    <div className="pt-4 pb-20 bg-[#f9f9ff]">
      <PageHeader home={"Home"} page={"Price Plan"} link={"/pricing"} />
      <PricePlan />
    </div>
  );
};

export default Pricing;
