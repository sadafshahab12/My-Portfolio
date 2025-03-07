import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
  return (
    <section className=" bg-[#f9f9ff] pt-30 lg:pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 mdl:grid-cols-[60%_40%] items-center gap-5 lg:gap-5  px-6 xxs:px-8 mdl:px-10 h-full md:h-screen ">
        <div className="space-y-7 md:pb-0 pb-10">
          <p className="uppercase text-sm tracking-widest">This is ME</p>
          <h1 className="uppercase font-bold xxs:font-semibold text-3xl xxxs:text-4xl xxs:text-5xl xs:text-7xl">
            Sadaf Shahab
          </h1>
          <p className="text-gray-500 text-12 xxxs:text-sm font-light leading-5 xxxs:leading-7 ">
            A passionate{" "}
            <strong className="font-bold text-mypurple">
              Front-End Developer
            </strong>{" "}
            specializing in{" "}
            <strong className="font-bold text-mypurple">
              React.js, Next.js
            </strong>
            , and{" "}
            <strong className="font-bold text-mypurple">Tailwind CSS</strong>. I
            love crafting sleek, high-performance web applications with clean,
            scalable code. Currently exploring the exciting world of AI to bring
            intelligent experiences to the web.
          </p>
          <p> {`Let's`} create something amazing together! </p>
          <div className="flex-left gap-4">
            <button className="button flex-center gap-2">
              Download CV <MdOutlineFileDownload className="w-5 h-5" />
            </button>
            <button className="button">Hire me</button>
          </div>
        </div>
        <div className="justify-items-center">
          <img
            src="/frame5.png"
            alt="sadaf-hero-img"
            className="h-75 xxs:h-100 w-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
