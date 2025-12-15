import React from 'react'
import RightSideBarHeader from '../components/rightSideBarComponents/RightSideBarHeader.jsx'
import RightSidebarBG from '../components/rightSideBarComponents/RightSidebarBG.jsx';
import RightSideBarSong from '../components/rightSideBarComponents/RightSideBarSong.jsx'

import { musicList } from '../assets/assetList.js';


const RightSideBar = () => {
  return (
    <div className='min-w-80 tabs hidden sm:block group/rightSide relative'>
      <div className='z-50 w-full absolute top-0'><RightSideBarHeader song={musicList[0]}/></div>
      <div className='z-50 w-full absolute bottom-0'><RightSideBarSong song={musicList[0]}/></div>
      <div className='z-0 block w-full h-full'><RightSidebarBG song={musicList[0]}/></div>
    </div>
  )
}

export default RightSideBar