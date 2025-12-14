import LeftSidebar from './left_side_bar/LeftSideBar';
import RightSidebar from './right_side_bar/RightSidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaPlay } from "react-icons/fa";

import { musicList } from './assets/assetList';
import SpotifyCarousel from './scrap/SpotifyCarousel';

function MainApp(){

  const recentMusic = musicList.slice(0,4);


  return(
    <div className='tabs sm:min-w-4xl mx-auto grow'>
        <div className='bg-gradient-to-b from-red-950 via-[#121212] to-[#121212] p-4 rounded-lg px-10'> 


          <div className='flex gap-4 items-center'>
            <button className='mainPageButtons' >All</button>
            <div className='flex items-center gap-1 focus:bg-white rounded-full bg-[rgba(255,255,255,0.15)]'><button className='mainPageButtons'>Music</button><button className='mainPageFollowingButtons'>Following</button></div>
            <div className='flex items-center gap-1 focus:bg-white rounded-full bg-[rgba(255,255,255,0.15)]'><button className='mainPageButtons'>Podcasts</button><button className='mainPageFollowingButtons'>Following</button></div>
          </div>

          
          <div className='grid sm:grid-cols-4 gap-x-2 gap-y-0 mt-3'>
          {/* End of buttons*/}
            {recentMusic.map((music, index) => ( <> 
              <div key={index} className='flex items-centerw gap-4 mt-4 hover:bg-[rgba(255,255,255,0.1)] p-2 rounded-sm bg-[rgba(255,255,255,0.05)] relative transition-all duration-200'>
                <div className='absolute text-transparent hover:text-black hover:bg-green-500 rounded-full text-2xl right-3 pl-2.5 pr-2 py-2 transition-all duration-200'><FaPlay /></div>
                <img src={music.img} alt={music.title} className='w-12 h-10 object-cover rounded-md'/>  
                <p className='text-white text-sm font-bold'>{music.title}</p>
              </div>
              </>
            ))}
          </div>
          {/* End of recent music grid */}
        
          <div>
            <SpotifyCarousel />
          </div>
        </div> 
    </div>
  );
}


function App() {
  return (
    <div className=' bg-black w-screen'>
    <Header />
    <div className='flex px-2 gap-2'>
     <LeftSidebar/>
     <MainApp />
     <RightSidebar/>
    </div>
    <Footer />
    </div>
  );
}

export default App;
