import { motion } from "framer-motion";
import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

import { projectData } from "./ProjectData";
const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 6;
  const filteredProjects = projectData.filter((project) => {
    if (selectedFilter === "All") {
      return true;
    }
    return project.technologies_used?.some((tech) =>
      tech
        .split(",")
        .map((t) => t.trim().toLowerCase())
        .includes(selectedFilter.toLowerCase())
    );
  });
  const totalPages = Math.ceil(filteredProjects.length / projectPerPage);
  const indexOfLastProject = currentPage * projectPerPage;
  // 2 * 6 = 12    3 * 6 = 18
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  // 12 - 6 = 6    18 - 6 = 12
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  // 6 , 12 -- 6 sy 12 tk on page@ 2 , // 6 , 12 it is range of porjects index wise  6 sy 12 through slicing hm slicing k zarye per page index k according 6 project slice krk show krwarahy hn

  const filterArray = [
    "All",
    "React JS",
    "Next JS",
    "Figma Design",
    "Ecommerce",
    "Blog",
    "API",
    "Auth",
    "Sanity",
  ];

  return (
    <section className=" bg-[#f9f9ff] py-15 md:py-20 lg:py-30 px-5 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h1 className="font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl text-center">
            My Latest Featured Projects
          </h1>
          <p className="text-gray-500 text-12 xxxs:text-sm font-light leading-5 xxxs:leading-7 text-center">
            From Concept to Creation, We Build High-Performance Websites that
            Deliver Stunning Visuals, Blazing-Fast Load Times, and Superior
            Mobile Responsiveness.
          </p>
        </motion.div>
        <div className="filter py-10">
          <ul className="text-12 uppercase flex justify-center gap-10 ">
            {filterArray.map((filter, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  selectedFilter === filter ? "text-mypurple" : "text-black"
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {" "}
                {filter}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 xs:grid-cols-2 mdl:grid-cols-3 gap-5">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className=" bg-sky-200 rounded-md relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 shadow-lg rounded-md object-cover"
                  />
                  <div className="space-y-2 p-5 ">
                    <h1 className="text-lg font-semibold">{project.title}</h1>

                    <div className="flex-left gap-2">
                      {Array.isArray(project.icon) &&
                        project.icon.map((icon, index) => (
                          <p
                            key={index}
                            className="bg-gradient-to-bl from-mypurple to-mysky p-1 rounded-sm"
                          >
                            {icon}
                          </p>
                        ))}
                    </div>
                    <div className=" flex-left gap-4 flex-wrap">
                      {Array.isArray(project.technologies_used) &&
                        project.technologies_used.map((tech, index) => (
                          <p
                            key={index}
                            className="text-[10px] text-textlightBlack font-light capitalize"
                          >
                            {tech}
                          </p>
                        ))}
                    </div>
                  </div>
                  <a href={project.link} target="_blank">
                    <div
                      className="absolute top-0 left-0 h-full w-full bg-slate-500 opacity-0 group-hover:opacity-50
                     transition-opacity duration-300 z-10 flex-center rounded-md "
                    >
                      <BsBoxArrowUpRight className="text-black w-7 h-7 cursor-pointer" />
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="flex-center gap-8 p-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="button"
          >
            Prev
          </button>
          <p className="text-sm flex-left gap-5">
            Page {currentPage} of {totalPages}
          </p>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="button"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
