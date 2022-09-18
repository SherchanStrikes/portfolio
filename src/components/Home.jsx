import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0c1c0e] ">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-300">Hi, my name is</p>
        <h1 className="text-white text-4xl sm:text-7xl font-bold">
          Saphal Sherchan
        </h1>
        <h2 className="text-slate-400 text-4xl sm:text-7xl font-bold">
          I'm a Frontend Developer.
        </h2>
        <p className="text-slate-500 py-4 max-w-[700px]">
          I'm a Frontend Developer specializing in designing and building
          full-responsive web applications along with React Js.
        </p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className="text-white group font-bold border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500  hover:border-yellow-500 ">
            
           View Work
          
            <span className="group-hover:rotate-90 duration-300 ">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
