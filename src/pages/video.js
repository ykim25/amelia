import { useState, useEffect } from 'react';
import styles from './video.css';
import { useParams } from 'react-router-dom';
import PlayAgainButton from './components/buttons/PlayAgainButton';

import PlayAgain from '../pages/components/buttons/PlayAgain.png';
import Lose from '../pages/components/popups/Lose.png'
import Win from '../pages/components/popups/Win.png'
import Loading from './loading';



export default function Video() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000)

    return () => clearTimeout(delay)
  }, [])
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
  const videoTitle = videos[id] || '';
  const [videoEnd, setVideoEnd] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false)
  const handleVideoEnd = () => {
    setVideoEnd(true)
    setShowPopUp(true)
  }

  console.log('AHA', videos[id])

  if (loading) {
    return <Loading />
  } return (
    <div className={styles.backgroundContainer}>
      <video autoPlay muted playsInline onEnded={handleVideoEnd}>
        <source src={videos[id]} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {videoEnd && (
        <div>
          {videoTitle.includes('Win') ? (
            <>
              <img src={Win} alt="Win" className='popup' />
              <PlayAgainButton />
            </>
          ) : (
            <>
              <img src={Lose} alt="Lose" className='popup' />
              <PlayAgainButton />
            </>
          )}
        </div>
      )}
    </div>
  );
}

