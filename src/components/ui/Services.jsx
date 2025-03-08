import {
  FaLaptopCode,
  FaMobileAlt,
  FaObjectGroup,
  FaPalette,
  FaReact,
  FaTabletAlt,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Frontend Web Development",
      description:
        "Build high-performance, scalable, and feature-rich websites using the latest technologies like Next.js, React.js, and Tailwind CSS.",
      icon: <FaLaptopCode className="w-7 h-7 " />,
    },
    {
      title: "Responsive Design",
      description:
        "Ensure seamless browsing on all screen sizes with fully responsive and mobile-friendly website layouts. Design visually appealing and user-friendly websites that enhance brand identity and user experience.",
      icon: <FaMobileAlt className="w-7 h-7 " />,
    },
    {
      title: "Figma to Website Conversion",
      description:
        "Transform Figma designs into pixel-perfect, fully functional websites with optimized performance.",
      icon: <FaObjectGroup className="w-7 h-7 " />,
    },
    {
      title: "Mobile Responsive Website",
      description:
        "Develop mobile-first, touch-friendly, and high-speed websites for the best user experience on smartphones and tablets.",
      icon: <FaTabletAlt className="w-7 h-7 " />,
    },
    {
      title: "Single Page Application (SPA) Development",
      description:
        "Build fast, interactive, and scalable single-page applications using React.js and Next.js. Ensure smooth navigation and real-time updates for an optimal user experience.",
      icon: <FaReact className="w-7 h-7 text-blue-500" />,
    },
    {
      title: "Figma UI/UX Designing",
      description:
        "Design intuitive, engaging, and user-centric UI/UX prototypes in Figma for websites and mobile apps.",
      icon: <FaPalette className="w-7 h-7 " />,
    },
  ];

  return (
    <section className=" bg-[#f9f9ff] pt-0 md:py-30 lg:pt-0">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4">
          <h1 className="uppercase font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl text-center">
            My Offered Services
          </h1>
          <p className="text-gray-500 text-[13px] xxxs:text-sm font-light leading-6 xxxs:leading-7 text-center">
            Professional Frontend Development & UI/UX Design – Fast, Responsive,
            and Scalable Web Solutions.
          </p>
        </div>
        <div className="grid grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-center flex-col gap-4 text-textlightBlack "
            >
              <p>{service.icon}</p>
              <h1 className="uppercase font-bold xxs:font-semibold text-lg xxs:text-xl text-center ">
                {service.title}
              </h1>
              <p className="text-gray-500 text-[13px] xxxs:text-sm font-light leading-6 xxxs:leading-7 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
