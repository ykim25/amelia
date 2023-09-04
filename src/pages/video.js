import { useState } from 'react';
import styles from './video.css';

// import BUST3R_FlyThrough from "../pages/components/BUST3R_FlyThrough.mp4";
// import BUST3R_Win from "../pages/components/BUST3R_Win.mp4";
// import LOADING from "../pages/components/LOADING.mp4";
// import Mav5_FlyThrough from "../pages/components/Mav5_FlyThrough.mp4";
// import Mav5_Water from "../pages/components/Mav5_Water.mp4";
// import Melia_Crash from "../pages/components/Melia_Crash.mp4";
// import Melia_Water from "../pages/components/Melia_Water.mp4";
// import Melia_Win from "../pages/components/Melia_Win.mp4";
// import Neha1_Water from "../pages/components/Neha1_Water.mp4";
// import Neha1_Win from "../pages/components/Neha1_Win.mp4";
// import Orv9_Crash from "../pages/components/Orv9_Crash.mp4";
// import Tom6_Crash from "../pages/components/Tom6_Crash.mp4";
// import Tom6_Water from "../pages/components/Tom6_Water.mp4";
// import Will7_FlyThrough from "../pages/components/Will7_FlyThrough.mp4";
// import Will7_Water from "../pages/components/Will7_Water.mp4";
import { useParams } from 'react-router-dom';

export default function Video() {
  const { id } = useParams()

  const videos = {
    1: '/BUST3R_FlyThrough.mp4',
    2: '/BUST3R_Win.mp4',
    3: '/Mav5_FlyThrough.mp4',
    4: '/Mav5_Water.mp4',
    5: '/Melia_Crash.mp4',
    6: '/Melia_Water.mp4',
    7: '/Melia_Win.mp4',
    8: '/Neha1_Water.mp4',
    9: '/Neha1_Win.mp4',
    10: '/Orv9_Crash.mp4',
    11: '/Tom6_Crash.mp4',
    12: '/Tom6_Water.mp4',
    13: '/Will7_FlyThrough.mp4',
    14: '/Will7_Water.mp4',
    15: '/LOADING.mp4'
  }



  const [videoEnd, setVideoEnd] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false)
  const handleVideoEnd = () => {
    setVideoEnd(true)
    setShowPopUp(true)
  }

  console.log('AHA', videos[id])
  return (
    <div className={styles.backgroundContainer}>
      <video autoPlay muted playsInline onEnded={handleVideoEnd}>
        <source src={videos[id]} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

