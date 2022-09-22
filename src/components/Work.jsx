import React from "react";
import workImg from "../assets/workImg.png";
import workImg2 from "../assets/workImg2.png";
const Work = () => {
  return (
    <div name="work" className="w-full h-screen md:h-screen text-gray-300 bg-[#0c1c0e] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/*Container */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/*Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="opacity-0 group-hover:opacity-60">
              <span className="text-2xl font-bold text-white tracking-wider">
                Auction Bidding Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/teammandala/mandalas">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="opacity-0 group-hover:opacity-60">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo List App
              </span>
              <div className="pt-8 text-center">
                <a href="https://sherchanstrikes.github.io/Todo-List/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="opacity-0 group-hover:opacity-60">
              <span className="text-2xl font-bold text-white tracking-wider">
                Landing Page
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/SherchanStrikes/react-website-finale">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
