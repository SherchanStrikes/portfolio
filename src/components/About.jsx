import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0c1c0e] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-300">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
                <p>Hi, I'm Saphal, nice to meet you. Please feel free to look around.</p>
            </div>
            <div>
                <p>
                    I am very passionate in designing and solving problems that improves the 
                    lives of those around me. I specialize in creating web applications for clients
                    ranging from individuals and small-businesses all the way to even large enterprise
                    corporations. What would you do if you had a consistent web developer at your fingertips?
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
