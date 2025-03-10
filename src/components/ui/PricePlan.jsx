import { motion } from "framer-motion";
import { pricingPlans } from "./Data";
const PricePlan = () => {
  return (
    <section className="py-10  px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h1 className="font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl text-center">
            Choose Your Plan
          </h1>
          <p className="text-gray-500 text-[13px] xxxs:text-sm font-light leading-6 xxxs:leading-7 text-center">
            Fast, Responsive, and SEO-Optimized Websites.Custom Front-End Web
            Development with Next.js & React – Tailored for Businesses of All
            Sizes.
          </p>
          <p className="tag gradient_text text-center ">
            Choose a Plan That Fits Your Needs!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mdl:grid-cols-3  pt-10 ">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="group hover:bg-gradient-to-br hover:from-mypurple hover:bg-mysky hover:scale-105 transition duration-300  bg-[#f9f9ff] p-5 space-y-3 xxs:space-y-5 hover:text-white justify-items-center text-center hover:z-30 cursor-pointer"
            >
              <h1 className="sm:text-2xl font-semibold text-xl">{plan.name}</h1>
              <p className="text-12 font-light text-gray-600 group-hover:text-white">
                {plan.description}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold h-22 xs:h-28 w-22 xs:w-28 border-2 shadow-md bg-textlightBlack text-mypurple flex-center rounded-full ">
                ${plan.price}
              </h2>
              <div className="flex-left gap-5">
                {plan.bestFor.map((best, index) => (
                  <p
                    key={index}
                    className="text-10 bg-textlightBlack px-2 py-1 text-mysky shadow-md shadow-mysky "
                  >
                    {best}
                  </p>
                ))}
              </div>
              <div className="py-1 xs:py-4">
                {plan.features.map((feature, index) => (
                  <p
                    key={index}
                    className="border-t group-hover:border-white last:border-b border-gray-400 py-3 text-12 text-gray-600 group-hover:text-white"
                  >
                    {feature}
                  </p>
                ))}
              </div>
              <button className="button w-full  block group-hover:bg-gradient-to-b group-hover:from-textlightBlack group-hover:to-textlightBlack">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricePlan;
