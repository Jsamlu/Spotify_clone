import { useState } from "react";

// icons
import { FiPlus } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { TiPin } from "react-icons/ti";



import { musicList, artistList, nameShortner } from "../assets/assetList";

const LeftSideBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [colapse, setColapse] = useState(false);
  return (
    <div
      className={`${
        !colapse
          ? "hidden tabs max-w-72 px-4 py-4 sm:flex flex-col gap-2 sc overflow-x-hidden relative"
          : "hiddenmax-w-40 px-4 py-4 sm:flex flex-col gap-2 bg-[#121212] overflow-x-hidden relative"
      }`}
    >
      <div
        className={`${
          !colapse
            ? "flex flex-col gap-5 fixed z-50 bg-[#121212] shadow-2xl w-64 pr-7 py-4 -mt-4"
            : "hidden"
        }`}
      >
        <div className="flex space-x-2 items-center">
          <div className="flex  gap-1 items-center text-white font-bold">
            <button onClick={() => setColapse(false)} className="">
              <IoIosArrowBack />
            </button>
            <p>Your Library</p>
          </div>
          <div className="flex gap-1 items-center ">
            <button className="bg-gray-800 p-2 rounded-full">
              <FiPlus className="text-white " />
            </button>
            <button className="hover:bg-gray-800 p-2 rounded-full ">
              <RiExpandDiagonalLine className="text-white" />
            </button>
          </div>
        </div>{" "}
        {/* first row */}
        <div className="">
          <ul className="flex items-center gap-3">
            <li>
              {" "}
              <button className="left-sidebar-items">Playlist</button>
            </li>
            <li>
              {" "}
              <button className="left-sidebar-items">Artist</button>
            </li>
            <li>
              {" "}
              <button className="left-sidebar-items">Albums</button>
            </li>
          </ul>
        </div>
      </div>
      {/*end of fixed part of side bar */}

      <div className={`  ${!colapse ? "mt-24 " : "hidden"} `}>
        <div>
          <div className="flex justify-between">
            <div
              className={` px-2 pb-1 flex items-center ${
                !showSearchBar ? "" : "bg-[#1f1f1f] rounded-[5px]"
              } `}
            >
              <FiSearch
                onClick={() => setShowSearchBar(!showSearchBar)}
                className={
                  !showSearchBar
                    ? "text-gray-500 text-xl mt-2"
                    : "text-gray-500 text-xl mt-2"
                }
              />
              <div
                className={
                  !showSearchBar
                    ? "hidden opacity-0 transform-x-0"
                    : "flex rounded-[5px] bg-[#1f1f1f]  opacity-100 transform-x-100 transition-all duration-300"
                }
              >
                <input
                  type="text"
                  placeholder="Search in Your Library"
                  className="text-sm text-gray-100 pr-4 outline-none translate-x-2"
                />
              </div>
            </div>
            <div>
              <button className="flex space-x-1 text-sm font-semibold text-gray-400 ml-4 items-center cursor-pointer hover:text-white hover:scale-110 transitions-all duration-100">
                {!showSearchBar && <p>Recents</p>}
                <AiOutlineBars className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        {/* End of search bar */}
        <div>
          <div className="grid py-3">
            {/* Start of music list  */}

                <div key={0} className="relative">
                <div className="flex items-center gap-3 hover:bg-gray-800 px-2 py-2 rounded-lg cursor-pointer overflow-hidden relative">
                  <div
                    className="w-14 h-14 bg-gradient-to-br from-indigo-900 via-indigo-400 to-indigo-200  rounded-md"
                  />
                  <div className="w-14 h-14 hover:bg-[rgba(0,0,0,0.3)] absolute rounded-lg flex items-center justify-center ">
                      {/* Placeholder for play button or other controls */}
                      <FaHeart className=" text-lg text-white m-3"/>
                    </div>
                  <div>
                    <p className="text-white font-semibold">Liked Songs</p>
                    <p className="text-gray-400 text-sm font-medium flex items-center"><TiPin className="text-green-400 text-lg"/>Playist<LuDot className="text-center text-xs" />10 Songs</p>
                  </div>
                </div>
              </div>


            {musicList.map((music) => (
              <div key={music.id} className="relative">
                <div className="flex items-center gap-3 hover:bg-gray-800 px-2 py-2 rounded-lg cursor-pointer overflow-hidden relative">
                  <img
                    src={music.img}
                    alt={music.title}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                  <div className="w-14 h-14 hover:bg-[rgba(0,0,0,0.3)] absolute rounded-lg flex items-center justify-center ">
                      {/* Placeholder for play button or other controls */}
                      <FaPlay className=" hover:text-xl text-transparent hover:text-white m-3 hover:scale-110 transition-all duration-150"/>
                    </div>
                  <div>
                    <p className="text-white font-semibold">{music.title}</p>
                    <p className="text-gray-400 text-sm font-medium flex items-center">Playist<LuDot className="text-center text-xs" />{nameShortner(music.artist)}</p>
                  </div>
                </div>
              </div>
            ))}
            {
              artistList.map((artist) => (
                <div key={artist.id} className="relative">
                  <div className="flex items-center gap-3 hover:bg-gray-800 px-2 py-2 rounded-lg cursor-pointer overflow-hidden relative">
                    <img
                      src={artist.artistImage}
                      alt={artist.artistName}
                      className="w-14 h-14 object-cover rounded-full"
                    />
                    <div className="w-14 h-14 hover:bg-[rgba(0,0,0,0.3)] absolute rounded-full flex items-center justify-center ">
                      {/* Placeholder for play button or other controls */}
                      <FaPlay className=" hover:text-xl text-transparent hover:text-white m-3 hover:scale-110 transition-all duration-150"/>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{artist.artistName}</p>
                       <p className="text-gray-400 text-sm font-medium flex items-center">Artist</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* End of music list  */}
      </div>
    </div>
    /*End of side bar */
  );
};

export default LeftSideBar;
