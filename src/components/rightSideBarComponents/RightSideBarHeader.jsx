import React from "react";
import { LuPanelRightClose } from "react-icons/lu";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiExpandDiagonalLine } from "react-icons/ri";

// import Marquee from "react-fast-marquee";

const RightSideBarHeader = ({song}) => {
  return (
    <div className="flex gap-5 z-50 px-3 py-5">
      
      <button className="right-sidebar-header-buttons -translate-x-5 opacity-0 group-hover/rightSide:translate-0 group-hover/rightSide:opacity-100 "><LuPanelRightClose/></button>
      {/* <div className="-translate-x-6 group-hover/rightSide:translate-0 transition-all duration-150"><Marquee><a href='#' className="link-style ">{song.title}</a></Marquee></div> */}
      <div className="-translate-x-6 group-hover/rightSide:translate-0 transition-all duration-150 text-white underline-offset-2 hover:underline hover:decoration-1.7  font-bold font-wide flex-1"><a href='#' className="link-style ">{song.title}</a></div>
      <button className="right-sidebar-header-buttons rounded-full hover:bg-[rgb(18,18,18)] p-1"><BiDotsHorizontalRounded/></button>
      <button className="right-sidebar-header-buttons rounded-full hover:bg-[rgb(18,18,18)] p-1"><RiExpandDiagonalLine/></button>
    </div>
  );
};

export default RightSideBarHeader;
