import React, { useState } from "react";
import Logo from "../assets/logo-s.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center
     px-4 bg-[#0c1c0e] text-gray-300"
    >
      <div>
        <img src={Logo} alt="Logo" style={{ width: "35px" }} />
      </div>

      {/* MENU */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* HAMBURGER */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes className="text-green-900" /> : <FaBars />}
      </div>
      {/* MOBILE */}

      <ul
        className={`absolute top-0 right-0 w-[35vw] h-screen bg-[#f2ad46] flex flex-col justify-center items-center ${
          nav
            ? 'translate-x-0'
            : "translate-x-full"
        }  transition ease-in-out duration-500`}
      >
        <li className="py-6 text-2xl text-green-900 font-bold ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl text-green-900 font-bold">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl text-green-900 font-bold">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl text-green-900 font-bold">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl text-green-900 font-bold">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* SOCIAL */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/saphal-sherchan-947861202/"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/SherchanStrikes"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" smooth={true} duration={500}>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
