import React from "react";
import { RiSpotifyFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { IoFolderOpenSharp } from "react-icons/io5";
import { BsArrowDownCircle } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { TbUsersGroup } from "react-icons/tb";

const Header = () => {
  return (
    <>
    <div className="min-h-16 bg-black sm:flex justify-between items-center px-6 py-2 hidden ">
      <logo className="flex items-center flex-1">
        <div>
          <RiSpotifyFill className="text-white text-[2.4rem]" />
        </div>
      </logo>
      <searchbar className="flex items-center gap-2 mr-4 flex-1">
        <GoHomeFill className="text-white text-[2.4rem]" />
        <div className="flex items-center border-2 hover:border-gray-100 rounded-full bg-[#1f1f1f] px-4 py-1">
          <FiSearch className="text-gray-500 text-2xl" />
          <input
            type="text"
            placeholder="Search..."
            className=" text-gray-100 px-4 rounded-full ml-4 outline-none"
          />
          <IoFolderOpenSharp className="text-white text-[2.4rem]" />
        </div>
      </searchbar>
      <others className="flex items-center gap-6">
        <button className="text-black text-sm font-semibold bg-white py-1 px-4 rounded-full">
          Explore Premium
        </button>
        <button className="text-gray-400 font-bold text-sm flex items-center gap-1">
          <BsArrowDownCircle className="text-white " /> <p>install App</p>
        </button>
        <div className="flex gap-2 text-2xl">
          <GoBell className="text-white" />
          <TbUsersGroup className="text-white " />
        </div>
        <div className=" rounded-full bg-gray-800 w-10 h-10 -mr-4"></div>
      </others>
    </div>
    {/* Desktop Header ends here */}
    {/* Mobile Header */}
    <div className="min-h-16 bg-black flex justify-between items-center px-6 py-2 sm:hidden ">
      
    </div>

    </>
  );
};

export default Header;
