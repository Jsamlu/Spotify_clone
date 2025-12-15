import { RxShuffle } from "react-icons/rx";
import { FiPlusCircle } from "react-icons/fi";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp  } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { SlLoop } from "react-icons/sl";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { BsPcDisplay } from "react-icons/bs";
import { FaVolumeHigh } from "react-icons/fa6";
import { CgMiniPlayer } from "react-icons/cg";
import { RxEnterFullScreen } from "react-icons/rx";

import { musicList } from "../../assets/assetList";


const MusicPlayer = () => {


//  [RxShuffle, IoPlaySkipBackSharp, FaCirclePlay, IoPlaySkipForwardSharp, SlLoop]; icons
// [TbMicrophone2, HiOutlineQueueList, BsPcDisplay, FaVolumeHigh, CgMiniPlayer, RxEnterFullScreen]
  return (
    <div>
      <div className="hidden sm:flex px-4 py-4 justify-between items-center">
        <div className="flex items-center gap-4 ">
          <img
            src={musicList[0].img}
            alt={musicList[0].title}
            className="w-16 h-16"
          />
          <div>
            <p className="text-sm font-medium text-gray-50">
              {musicList[0].title}
            </p>
            <p className="text-xs text-[rgba(255,255,255,0.3)]">
              {musicList[0].artist}
            </p>
          </div>
          <FiPlusCircle className="text-[rgba(255,255,255,0.6)]" />
        </div>
        {/*Song Block*/}
        <div className="flex flex-col m-auto items-center gap-1">
          <div className="flex items-center  gap-x-5 mb-2 transition-all duration-150">
            <button className="text-[rgba(255,255,255,0.6)] text-xl hover:scale-105 hover:text-white "><RxShuffle/></button>
            <button className="text-[rgba(255,255,255,0.7)] text-2xl hover:scale-105 hover:text-white"><IoPlaySkipBackSharp/></button>
            <button className="text-gray-50 text-3xl hover:scale-105 hover:text-white"><FaCirclePlay/></button>
            <button className="text-[rgba(255,255,255,0.7)] text-2xl hover:scale-105 hover:text-white "><IoPlaySkipForwardSharp/></button>
            <button className="text-[rgba(255,255,255,0.6)] text-xl hover:scale-105 hover:text-white "><SlLoop/></button>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-gray-50 text-xs">0:00</p>
            <div className="w-[60vw] max-w-125 bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer group/player">
              <hr className="h-1 border-none w-[60%] bg-white group-hover/player:bg-green-600 rounded-full cursor-pointer "></hr>
            </div>
            <p className="text-gray-50 text-xs">{musicList[0].duration}</p>
          </div>
        </div>
        {/*Player Block */}
        <div className="flex gap-3 items-center">
          <button className="text-[rgba(255,255,255,0.6)] text-xl hover:scale-105 hover:text-white "><TbMicrophone2/></button>
          <button className="text-[rgba(255,255,255,0.6)] text-xl hover:scale-105 hover:text-white "><HiOutlineQueueList/></button>
          <button className="text-[rgba(255,255,255,0.6)] text-xl hover:scale-105 hover:text-white "><BsPcDisplay/></button>
          <button className="text-[rgba(255,255,255,0.6)] text-xl hover:scale-105 hover:text-white peer/volume"><FaVolumeHigh/></button>
          <div className="w-24 bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer h-1 group/volume">
            <hr className="w-15 bg-white h-1 rounded-full peer-hover/volume:bg-green-600 group-hover/volume:bg-green-600 t"/>
          </div>
          <button className="text-[rgba(255,255,255,0.6)] text-xl hover:scale-105 hover:text-white "><CgMiniPlayer/></button>
          <button className="text-[rgba(255,255,255,0.6)] text-xl hover:scale-105 hover:text-white "><RxEnterFullScreen/></button>
        </div>
        {/*keys block */}
      </div>
    </div>
  );
};

export default MusicPlayer;
