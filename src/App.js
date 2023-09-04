import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import Video from "./pages/video";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/video/:id" element={<Video />} />
    </Routes>
  );
}
export default App;
