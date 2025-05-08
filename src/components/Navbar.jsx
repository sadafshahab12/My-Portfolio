import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleCloseMenu = () => {
    setToggleMenu(false);
  };
  return (
    <nav className="shadow fixed w-full z-50 bg-white">
      <div className="flex justify-between items-center md:px-10 px-5 py-2 max-w-6xl mx-auto">
        <div className="logo">
          <img
            src="/logo.png"
            alt="logo"
            className="w-14 h-14 object-contain"
          />
        </div>
        {/* web navbar  */}
        <div className="md:block hidden">
          <ul className="flex items-center gap-8  lg:gap-12 ">
            <li>
              <Link
                to={"/"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
              >
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
              >
                About{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
              >
                Services{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/portfolio"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
              >
                Portfolio{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/pricing"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
              >
                Pricing{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/certificate"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
              >
                Certificates{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
              >
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
        {/* mobile menu  */}
        <div className="md:hidden block ">
          <ul
            className={`flex flex-col items-center gap-12 absolute top-16 p-5 bg-white ${
              toggleMenu ? "left-0" : "-left-full"
            } w-full transition-all ease-in duration-300 h-screen `}
          >
            <li>
              <Link
                to={"/"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
                onClick={handleCloseMenu}
              >
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
                onClick={handleCloseMenu}
              >
                About{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
                onClick={handleCloseMenu}
              >
                Services{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/portfolio"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
                onClick={handleCloseMenu}
              >
                Portfolio{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/pricing"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
                onClick={handleCloseMenu}
              >
                Pricing{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/certificate"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
                onClick={handleCloseMenu}
              >
                Certificates{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="uppercase cursor-pointer font-medium text-[13px] hover:text-[#8392fd] transition-all duration-500"
                onClick={handleCloseMenu}
              >
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
        {/* icon  */}
        <div className="menu-icon md:hidden block">
          {toggleMenu ? (
            <IoCloseOutline
              onClick={handleToggleMenu}
              className="cursor-pointer w-6 h-6"
            />
          ) : (
            <HiOutlineMenuAlt3
              onClick={handleToggleMenu}
              className="cursor-pointer w-6 h-6"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
