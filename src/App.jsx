import LeftSidebar from "./left_side_bar/LeftSideBar";
import RightSidebar from "./right_side_bar/RightSidebar";
import Header from "./components/Header";

import Home from "./home/Home.jsx";
import MusicPlayer from "./components/musicPlayer/MusicPlayer.jsx";


function MainApp() {
  

  return (
    <div className="tabs sm:min-w-4xl mx-auto grow sc">
      <Home/>
    </div>
  );
}

function App() {
  return (
    <div className=" bg-black w-screen">
      <Header />
      <div className="flex px-2 gap-2">
        <LeftSidebar />
        <MainApp />
        <RightSidebar />
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
