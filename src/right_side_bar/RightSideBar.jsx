import React from 'react'
import RightSideBarHeader from '../components/rightSideBarComponents/RightSideBarHeader.jsx'
import RightSidebarBG from '../components/rightSideBarComponents/RightSidebarBG.jsx';
import { musicList } from '../assets/assetList.js';


const RightSideBar = () => {
  return (
    <div className='min-w-80 tabs hidden sm:block group/rightSide'>
      {/* <RightSidebarBG song={musicList[0]}/> */}
      <div className='z-50 absolute'><RightSideBarHeader song={musicList[0]}/></div>
    </div>
  )
}

export default RightSideBar