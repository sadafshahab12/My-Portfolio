import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className=" bg-[#f9f9ff]  px-5 sm:px-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 mdl:grid-cols-3 gap-5 pt-10 ">
    
        </div>
      </div>
    </section>
  );
};

export default Services;
