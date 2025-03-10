import { services } from "./Data";
import { motion } from "framer-motion";
const Services = () => {

  return (
    <section className=" bg-[#f9f9ff] py-15 md:py-20 lg:py-30 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h1 className="font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl text-center">
            My Offered Services
          </h1>
          <p className="text-gray-500 text-[13px] xxxs:text-sm font-light leading-6 xxxs:leading-7 text-center">
            Professional Frontend Development & UI/UX Design – Fast, Responsive,
            and Scalable Web Solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mdl:grid-cols-3 gap-5 pt-10 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex-left flex-col gap-6 text-textlightBlack  group hover:scale-105 transition-all duration-300  "
            >
              <p className="service-group-hover-effect">{service.icon}</p>
              <h1 className="font-bold xxs:font-semibold text-lg xxs:text-xl text-center  service-group-hover-effect cursor-pointer">
                {service.title}
              </h1>

              <p className="text-gray-400 text-12 xxxs:text-[13px] font-light leading-6 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
