import { useState } from 'react';

import BUST3R_FlyThrough from "../pages/components/videos/BUST3R_FlyThrough.mp4";
import BUST3R_Win from "../pages/components/videos/BUST3R_Win.mp4";
import LOADING from "../pages/components/videos/LOADING.mp4";
import Mav5_FlyThrough from "../pages/components/videos/Mav5_FlyThrough.mp4";
import Mav5_Water from "../pages/components/videos/Mav5_Water.mp4";
import Melia_Crash from "../pages/components/videos/Melia_Crash.mp4";
import Melia_Water from "../pages/components/videos/Melia_Water.mp4";
import Melia_Win from "../pages/components/videos/Melia_Win.mp4";
import Neha1_Water from "../pages/components/videos/Neha1_Water.mp4";
import Neha1_Win from "../pages/components/videos/Neha1_Win.mp4";
import Orv9_Crash from "../pages/components/videos/Orv9_Crash.mp4";
import Tom6_Crash from "../pages/components/videos/Tom6_Crash.mp4";
import Tom6_Water from "../pages/components/videos/Tom6_Water.mp4";
import Will7_FlyThrough from "../pages/components/videos/Will7_FlyThrough.mp4";
import Will7_Water from "../pages/components/videos/Will7_Water.mp4";
import { useParams } from 'react-router-dom';

export default function Video() {
  const { id } = useParams()

  const videos = {
    1: '/videos/BUST3R_FlyThrough.mp4',
    2: '/videos/BUST3R_Win.mp4',
    3: '/videos/Mav5_FlyThrough.mp4',
    4: '/videos/Mav5_Water.mp4',
    5: '/videos/Melia_Crash.mp4',
    6: '/videos/Melia_Water.mp4',
    7: '/videos/Melia_Win.mp4',
    8: '/videos/Neha1_Water.mp4',
    9: '/videos/Neha1_Win.mp4',
    10: '/videos/Orv9_Crash.mp4',
    11: '/videos/Tom6_Crash.mp4',
    12: '/videos/Tom6_Water.mp4',
    13: '/videos/Will7_FlyThrough.mp4',
    14: '/videos/Will7_Water.mp4',
    15: '/videos/LOADING.mp4'
  }



  const [videoEnd, setVideoEnd] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false)
  const handleVideoEnd = () => {
    setVideoEnd(true)
    setShowPopUp(true)
  }
  return (
    <div>
      <video autoPlay muted playsInline onEnded={handleVideoEnd}>
        <source src='/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

