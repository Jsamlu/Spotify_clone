import React from "react";
import { LuPanelRightClose } from "react-icons/lu";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiExpandDiagonalLine } from "react-icons/ri";

import { musicList } from "../../assets/assetList";
import Marquee from "react-fast-marquee";

const RightSideBarHeader = ({song}) => {
  return (
    <div className="flex gap-4 z-50 px-3 py-5">
      
      <button className="right-sidebar-header-buttons"><LuPanelRightClose/></button>
      <Marquee><a href='#' className="link-style">{song.title}</a></Marquee>
      <button className="right-sidebar-header-buttons"><BiDotsHorizontalRounded/></button>
      <button className="right-sidebar-header-buttons"><RiExpandDiagonalLine/></button>
    </div>
  );
};

export default RightSideBarHeader;
