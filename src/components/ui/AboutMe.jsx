import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <section className=" bg-[#f9f9ff] pt-0 md:pt-40 mdl:pt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 mdl:grid-cols-[40%_60%] items-center gap-5 lg:gap-5 pt-25 md:pt-20 px-6 xxs:px-8 mdl:px-10  grid-flow-row-reverse ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-7 md:pb-0 pb-10 order-1 mdl:order-2"
        >
          <p className="uppercase text-sm tracking-widest">About Me</p>
          <h1 className="uppercase font-bold xxs:font-semibold text-2xl xxxs:text-3xl xxs:text-4xl xs:text-5xl">
            Personal Details
          </h1>
          <p className="text-gray-500 text-[13px] xxxs:text-sm font-light leading-6 xxxs:leading-7 text-justify">
            Hi, {`I'm`} Sadaf Shahab, a{" "}
            <strong className="font-bold text-mypurple">
              Front-End Developer
            </strong>{" "}
            specializing in{" "}
            <strong className="font-bold text-mypurple">
              {" "}
              React.js, Next.js, and Tailwind CSS{" "}
            </strong>
            . I craft high-performance,
            <strong className="font-bold text-mypurple uppercase">
              {" "}
              responsive
            </strong>{" "}
            web applications with seamless UI/UX. Passionate about clean code
            and modern web technologies, {`I’m`} constantly innovating to build
            scalable, user-friendly digital experiences. Currently exploring
            AI-driven web development, I aim to integrate artificial
            intelligence into interactive applications. With a keen eye for
            detail and a growth mindset, I thrive on solving complex challenges
            and pushing the boundaries of front-end development.
          </p>
          <p className="tag gradient_text">
            {" "}
            {`Let’s`} connect and build something amazing!{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          v
          className="justify-items-center mdl:order-1 order-2 relative flex justify-center items-center"
        >
          <img
            src="/frame5.png"
            alt="sadaf-hero-img"
            className="h-auto w-full max-w-[200px] xxxs:max-w-[250px] xxs:max-w-sm "
          />
          <img
            src="/aboutme.png"
            alt="sadaf-hero-img"
            className="absolute w-3/4 md:w-5/5 max-w-[300px] xs:max-w-[350px]  object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
