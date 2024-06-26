import React from "react";
import Single from "./../assets/single.png";
import Double from "./../assets/double.png";
import Triple from "./../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl shadow-slate-400 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single</h2>
          <p className="text-center text-4xl font-bold">₹499</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2GB </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-50 shadow-slate-400 flex flex-col p-4 my-8 md:m-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Double</h2>
          <p className="text-center text-4xl font-bold">₹799</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1000GB storage</p>
            <p className="py-2 border-b mx-8 ">2 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 3GB </p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl shadow-slate-400 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple</h2>
          <p className="text-center text-4xl font-bold">₹999</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">2000GB storage</p>
            <p className="py-2 border-b mx-8 ">3 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 5GB </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
