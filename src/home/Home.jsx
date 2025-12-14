import Footer from "../components/Footer";

import { IoPlaySharp } from "react-icons/io5";

import { musicList, albumList } from "../assets/assetList";

import Carousel from "../components/mainPage/carousel/Carousel";
import DailyMixCarousel from "../components/mainPage/carousel/DailyMixCarousel";

function Home() {
  const recentMusic = musicList.slice(0, 4);

  return (
    <>
      <div className="bg-gradient-to-b from-red-950 via-[#121212] to-[#121212] p-4 rounded-lg px-10 ">
        <div className="flex gap-4 items-center">
          <button className="mainPageButtons">All</button>
          <div className="flex items-center gap-1 focus:bg-white rounded-full bg-[rgba(255,255,255,0.15)]">
            <button className="mainPageButtons">Music</button>
            <button className="mainPageFollowingButtons">Following</button>
          </div>
          <div className="flex items-center gap-1 focus:bg-white rounded-full bg-[rgba(255,255,255,0.15)]">
            <button className="mainPageButtons">Podcasts</button>
            <button className="mainPageFollowingButtons">Following</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 grid-cols-2 gap-x-2 gap-y-0 mt-3">
          {/* End of buttons*/}
          {recentMusic.map((music, index) => (
            <>
              <div
                key={index}
                className="flex items-centerw gap-4 mt-4 hover:bg-[rgba(255,255,255,0.1)] p-2 rounded-sm bg-[rgba(255,255,255,0.05)] relative transition-all duration-200 group/recent"
              >
                <div className="absolute text-transparent hover:bg-green-500 rounded-full text-2xl right-3 pl-2.5 pr-2 py-2 transition-all duration-200 group-hover/recent:bg-green-500 group-hover/recent:text-black cursor-pointer">
                  <IoPlaySharp />
                </div>
                <img
                  src={music.img}
                  alt={music.title}
                  className="w-12 h-10 object-cover rounded-md"
                />
                <p className="text-white text-sm font-bold">{music.title}</p>
              </div>
            </>
          ))}
        </div>
        {/* End of recent music grid */}
        <div className=" rounded-lg">
          <DailyMixCarousel
            items={albumList}
            title="james\"
            subtitle="Made for"
          />
        </div>
      </div>

      <div className="py-4 px-10">
        <Carousel
          items={albumList}
          title="Daily Mix 1"
          subtitle="Your daily mix of music"
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
