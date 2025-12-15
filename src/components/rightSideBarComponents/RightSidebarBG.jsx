import React from 'react'

const RightSidebarBG = ({song}) => {
  return (
    <div className='w-full h-full relative z-0'>
        <div className='group-hover/rightSide:opacity-70 opacity-90 bg-gradient-to-b from-[rgba(18,18,18,0.5)] via-[rgba(18,18,18,0.5)] to-[rgb(18,18,18)] w-full h-full blur-[2px] hover:blur-[2px] transition-all duration-150'>
        <img src={song.img} className='object-cover h-full' /></div>
        
    </div>
  )
}

export default RightSidebarBG