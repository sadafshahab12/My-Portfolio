import React from "react";
import { FaYahoo } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-textlightBlack">
      <div className="max-w-6xl mx-auto p-5 grid grid-cols-3 ">
        <div className="text-white">
          <img
            src="/logo.png"
            alt="logo"
            className="w-14 h-14 object-contain"
          />
          <h1 className="uppercase font-bold xxs:font-semibold text-2xl xxxs:text-xl xxs:text-2xl xs:text-3xl">
            Sadaf Shahab
          </h1>
          <p className="text-mysky text-12 xxxs:text-sm font-light leading-5 xxxs:leading-7 ">
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
        </div>

        <div className="text-white">
          <ul className="flex flex-col items-center gap-3 ">
            <h1 className=" font-bold xxs:font-semibold text-lg xs:text-xl">
              Quick Links
            </h1>
            <li>
              <Link
                to={"/"}
                className="uppercase cursor-pointer font-medium text-12 hover:text-[#8392fd] transition-all duration-500"
              >
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="uppercase cursor-pointer font-medium text-12 hover:text-[#8392fd] transition-all duration-500"
              >
                About{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="uppercase cursor-pointer font-medium text-12 hover:text-[#8392fd] transition-all duration-500"
              >
                Services{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/portfolio"}
                className="uppercase cursor-pointer font-medium text-12 hover:text-[#8392fd] transition-all duration-500"
              >
                Portfolio{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/pricing"}
                className="uppercase cursor-pointer font-medium text-12 hover:text-[#8392fd] transition-all duration-500"
              >
                Pricing{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="uppercase cursor-pointer font-medium text-12 hover:text-[#8392fd] transition-all duration-500"
              >
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white space-y-3">
          <h1 className=" font-bold xxs:font-semibold text-lg xs:text-xl">
            Follow Me
          </h1>
          <div className="space-y-3">
            <a
              href="mailto:sadafshahabsr12@gmail.com"
              className="flex-left gap-4 text-12"
            >
              <IoMailOutline className="w-4 h-4" /> :{" "}
              <span>sadafshahabsr12@gmail.com</span>{" "}
            </a>
            <a
              href="mailto:sadafshahab123@yahoo.com"
              className="flex-left gap-4 text-12"
            >
              <FaYahoo className="w-4 h-4" /> :{" "}
              <span>sadafshahab123@yahoo.com</span>{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
