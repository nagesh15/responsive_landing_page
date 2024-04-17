import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1>
      <ul className="hidden md:flex md:align-middle">
        <li className="p-4">Home</li>
        <li className="p-4">Resource</li>
        <li className="p-4">Company</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={toggleNav} className="block md:hidden">
        {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          open
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] ease-in-out duration-500 md:hidden"
        }
      >
        <h1 className="w-full text-3xl pt-4 font-bold text-[#00df9a] m-4">
          React
        </h1>
        <ul className="uppercase pl-4">
          <li className="p-4 border-b border-gray-700">Home</li>
          <li className="p-4 border-b border-gray-700">Resource</li>
          <li className="p-4 border-b border-gray-700">Company</li>
          <li className="p-4 border-b border-gray-700">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
