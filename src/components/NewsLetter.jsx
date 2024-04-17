import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold py-2">
            Lorem ipsum, dolor sit amet elit?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-2 ">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            <input
              className="p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
