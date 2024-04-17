import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[900px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center text-center ">
        <p className="text-[#00df9a]  font-bold p-2">
          Lorem ipsum, dolor sit amet consectetur.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-3xl font-bold md:py-6">
          Lorem ipsum, dolor.
        </h1>
        <div className="flex justify-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Lorem ipsum, dolor sit.
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-8 pl-4 text-[#00df9a]"
            strings={["Lorem", "ipsum", "sit"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 pt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum velit
          veniam aut distinctio optio illo!
        </p>
        <button className="bg-[#00df9a]  text-xl w-[200px] rounded-lg my-6 mx-auto py-3">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
