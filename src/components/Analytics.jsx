import React from "react";
import Laptop from "./../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="photo" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a]  font-bold uppercase md:text-2xl text-xl">
            Lorem ipsum dolor, sit
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Lorem ipsum dolor, sit lorem
          </h1>
          <p className="py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            quisquam iste nobis similique, eum sequi repellat aliquid quibusdam
            exercitationem sed quaerat praesentium excepturi inventore iure.
            Nulla voluptatibus tempore esse distinctio?
          </p>
          <button className="bg-black  text-xl text-[#00df9a] w-[200px] rounded-lg my-6 mx-auto md:mx-0 py-3">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
