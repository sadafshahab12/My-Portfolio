import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
const ProjectStats = () => {
  const projectstats = useMemo(
    () => [
      { value: "20+", label: "Websites Developed" },
      { value: "100%", label: "Responsive & Mobile-Friendly Designs" },
      { value: "2s", label: "Blazing-Fast Performance" },
      { value: "3+", label: "Figma Designs Converted" },
      { value: "90+", label: "Optimized for Speed & SEO" },
    ],
    []
  );

  const [displayValues, setDisplayValues] = useState(projectstats.map(() => 0));

  useEffect(() => {
    const timeouts = projectstats.map((projects, index) => {
      const targetValue = projects.value.includes("+")
        ? parseInt(projects.value) || 0
        : projects.value.includes("%")
        ? parseInt(projects.value) || 0
        : projects.value.includes("s")
        ? parseInt(projects.value) || 0
        : projects.value;
      const incrementValue = () => {
        let currentValue = 0;
        const interval = setInterval(() => {
          if (currentValue < targetValue) {
            currentValue++;
            setDisplayValues((prevValues) => {
              const updatedValues = [...prevValues];
              updatedValues[index] = currentValue;
              return updatedValues;
            });
          } else {
            clearInterval(interval);
          }
        }, 10);
      };
      incrementValue();
      //   return interval;
    });
    return () => timeouts.forEach(clearInterval);
  }, [projectstats]);
  return (
    <section className="bg-gradient-to-r from-mypurple to-mysky min-h-70">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 place-content-center gap-4 min-h-70"
      >
        {projectstats.map((project, index) => (
          <div key={index} className="text-white space-y-2 p-5 ">
            <h1 className="text-4xl font-bold text-center">
              {displayValues[index] === 0
                ? "0"
                : displayValues[index] +
                  (project.value.includes("+")
                    ? "+"
                    : project.value.includes("%")
                    ? "%"
                    : project.value.includes("s")
                    ? "s"
                    : "")}
            </h1>
            <p className="text-sm font-light text-center">{project.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectStats;
