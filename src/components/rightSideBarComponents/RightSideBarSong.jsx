import React from "react";

import { FiPlusCircle } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";

import {nameShortner} from '../../assets/assetList.js'


const RightSideBarSong = ({song}) => {
  return <div className="w-full flex gap-4 z-50 px-4 py-5 items-center">
    <div className="flex flex-col flex-1">
        <p className="text-2xl font-bold  text-gray-200 hover:text-white cursor-pointer hover:underline hover:underline-offset-2 mb-1 decoration-2 tracking-wide">{nameShortner(song.title)}</p>
        <p className="text-sm cursor-pointer hover:underline hover:decoration-1.5 hover:underline-offset-2 text-[rgba(255,255,255,0.6)] hover:text-white">{song.artist}</p>
    </div>
    <button className="opacity-0 translate-x-5 group-hover/rightSide:translate-0 group-hover/rightSide:opacity-100 right-sidebar-header-buttons"><FiUpload/></button>
    <button className="right-sidebar-header-buttons"><FiPlusCircle/></button>
  </div>;
};

export default RightSideBarSong;
