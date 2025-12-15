import React from "react";
import { RiSpotifyFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { BsArrowDownCircle } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { TbUsersGroup } from "react-icons/tb";
import { GrDrawer } from "react-icons/gr";

import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  return (
    <>
    <div className="min-h-16 bg-black sm:flex justify-between items-center px-6 py-2 hidden overflow-y-hidden">
      <logo className="flex items-center flex-1">
        <div>
          <RiSpotifyFill className="text-gray-50 text-[2.4rem]" />
        </div>
      </logo>
      <searchbar className="flex items-center gap-2 mr-4 flex-1">
       {location.pathname === "/" ? <GoHomeFill className="w-12 h-11 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.2)] px-2 py-2 text-[20px] rounded-full text-white hover:scale-105" /> : <GoHome className="bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)] px-2 py-2 text-[30px] rounded-full text-[rgba(255,255,255,0.6)] hover:text-white hover:scale-105" />}
        <div className="flex items-center border-2 hover:border-gray-100 rounded-full bg-[#1f1f1f] px-4 py-1 w-full">
          <FiSearch className="text-gray-500 text-2xl" />
          <input
            type="text"
            placeholder="Search..."
            className=" text-gray-100 px-4 ml-4 outline-none border-r border-[rgba(255,255,255,0.3)] flex-1 py-1.75" 
          />
          <GrDrawer className="ml-4 text-[rgba(255,255,255,0.6)] hover:text-white text-[1.5rem]" />
        </div>
      </searchbar>
      <others className="ml-20 flex items-center gap-6 transition-all duration-300">
        <button className="text-black text-sm font-semibold bg-white py-1 px-4 rounded-full hover:scale-105 transition-all duration-200">
          Explore Premium
        </button>
        <button className="text-gray-400 font-bold text-sm flex items-center gap-1 hover:text-white hover:scale-105 transition-all duration-200">
          <BsArrowDownCircle/> <p>Install App</p>
        </button>
        <div className="flex gap-2 text-2xl">
          <GoBell className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-200" />
          <TbUsersGroup className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-200" />
        </div>
        <div className=" rounded-full bg-gray-800 w-10 h-10 -mr-4  hover:scale-105 transition-all duration-200"></div>
      </others>
    </div>
    {/* Desktop Header ends here */}
    {/* Mobile Header */}
    <div className="min-h-16 bg-black flex justify-between items-center px-6 py-2 sm:hidden">
      
    </div>

    </>
  );
};

export default Header;
