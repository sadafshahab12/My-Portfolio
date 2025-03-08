import {
  FaLaptopCode,
  FaMobileAlt,
  FaObjectGroup,
  FaPalette,
  FaReact,
  FaTabletAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
const Services = () => {
  const services = [
    {
      title: "Frontend Web Development",
      description:
        "Build high-performance, scalable, and feature-rich websites using the latest technologies like Next.js, React.js, and Tailwind CSS.",
      icon: <FaLaptopCode className="w-8 h-8 group-hover:text-mypurple  " />,
    },
    {
      title: "Single Page Application (SPA) Development",
      description:
        "Build fast, interactive, and scalable single-page applications using React.js and Next.js. Ensure smooth navigation and real-time updates for an optimal user experience.",
      icon: <FaReact className="w-8 h-8 group-hover:text-mypurple " />,
    },
    {
      title: "Responsive Design",
      description:
        "Ensure seamless browsing on all screen sizes with fully responsive and mobile-friendly website layouts. Design visually appealing and user-friendly websites that enhance brand identity and user experience.",
      icon: <FaMobileAlt className="w-8 h-8 group-hover:text-mypurple  " />,
    },
    {
      title: "Figma to Website Conversion",
      description:
        "Transform Figma designs into pixel-perfect, fully functional websites with optimized performance.",
      icon: <FaObjectGroup className="w-8 h-8 group-hover:text-mypurple  " />,
    },
    {
      title: "Mobile Responsive Website",
      description:
        "Develop mobile-first, touch-friendly, and high-speed websites for the best user experience on smartphones and tablets.",
      icon: <FaTabletAlt className="w-8 h-8 group-hover:text-mypurple  " />,
    },

    {
      title: "Figma UI/UX Designing",
      description:
        "Design intuitive, engaging, and user-centric UI/UX prototypes in Figma for websites and mobile apps.",
      icon: <FaPalette className="w-8 h-8 group-hover:text-mypurple  " />,
    },
  ];

  return (
    <section className=" bg-[#f9f9ff] pt-15 md:pt-20 lg:pt-30 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div className="space-y-4">
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
