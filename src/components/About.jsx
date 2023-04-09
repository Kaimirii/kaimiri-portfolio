import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Kaimiri, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a skilled and detail-oriented software developer who takes
              pride in creating innovative software solutions. I have a passion
              for problem-solving and enjoy working with cutting-edge
              technologies and programming languages. I have a strong
              understanding of programming concepts and proficient in multiple
              programming languages, allowing me to adapt to different software
              development environments with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
