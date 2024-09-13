import { useState } from "react";
import { HiBars4, HiXMark } from "react-icons/hi2";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-800 w-full fixed top-0 z-50 text-white items-center flex  justify-between py-5 px-5">
      <div className="md:font-semibold text-custom-light md:text-2xl text-base flex">
        <span className="md:text-2xl text-white mr-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 rounded-full">
          MO
        </span>
      </div>
      <div
        className={`md:static absolute md:min-h-fit bg-zinc-800 font-medium min-h-[45vh] md:w-auto top-[11%] w-full left-0 flex pt-5 justify-center ${
          isMenuOpen ? "block" : "hidden"
        } md:block z-40`}
      >
        <ul className="flex text-custom-light cursor-pointer md:top-[0%] md:flex-row flex-col md:gap-[4vw] gap-[20px]">
          <li>
            <Link
              to="home"
              spy="true"
              smooth="true"
              offset={-95}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="aboutMe"
              spy="true"
              smooth="true"
              offset={-95}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy="true"
              smooth="true"
              offset={-95}
              duration={500}
            >
              Skills
            </Link>
          </li>{" "}
          <li>
            <Link
              to="projects"
              spy="true"
              smooth="true"
              offset={-95}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy="true"
              smooth="true"
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 px-5">
        <Link to="contact" spy="true" smooth="true" offset={0} duration={500}>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 md:px-5 px-8  md:py-2 py-2 rounded-full md:text-lg font-medium hover:bg-slate-300 hover:text-blue-300">
            Hire Me
          </button>
        </Link>
        {isMenuOpen ? (
          <HiXMark
            className="text-3xl cursor-pointer md:hidden"
            onClick={openMenu}
          />
        ) : (
          <HiBars4
            className="text-3xl cursor-pointer md:hidden"
            onClick={openMenu}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
