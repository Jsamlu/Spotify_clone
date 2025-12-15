import LeftSidebar from "./left_side_bar/LeftSideBar.jsx";
import RightSidebar from "./right_side_bar/RightSideBar.jsx";
import Header from "./components/Header.jsx";

import Home from "./home/Home.jsx";
import MusicPlayer from "./components/musicPlayer/MusicPlayer.jsx";
import { Route, Routes } from "react-router-dom";


function MainApp() {
  

  return (
    <div className="tabs sm:min-w-4xl mx-auto grow sc">
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="*" element={<p>404 Page Not Found</p>} />
      </Routes>
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
