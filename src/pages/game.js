import { useState, useEffect } from 'react';
import styles from './game.css';
import axios from 'axios'
import Loading from './loading';
// Planes
import Orv9 from '../pages/components/planes/Orv9.png';
import Neha1 from '../pages/components/planes/Neha1.png';
import Melia from '../pages/components/planes/Melia.png';
import Tom6 from '../pages/components/planes/Tom6.png';
import Will7 from '../pages/components/planes/Will7.png';
import Mav5 from '../pages/components/planes/Mav5.png';
import Buster from '../pages/components/planes/Buster.png';
// Components
import NextButton from './components/buttons/NextButton';
import PreviousButton from './components/buttons/PreviousButton';
import LaunchButton from './components/buttons/LaunchButton';
import GameConditions from './components/GameConditions';

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameConditions, setGameConditions] = useState({
    location: null,
    windDirection: null,
    windSpeed: null,
    distance: '25 mi'
  })

  const planes = [Orv9, Neha1, Melia, Tom6, Will7, Mav5, Buster];

  const planeNames = [
    'Orv9',
    'Neha1',
    'Melia',
    'Tom6',
    'Will7',
    'Mav5',
    'Buster',
  ];

  const currentPlane = planes[currentIndex]

  const currentPlaneName = planeNames[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === planes.length - 1 ? planes.length - 1 : prev + 1
    );
  };

  return (
    <div className={styles.backgroundContainer}>
      <video autoPlay loop muted playsInline>
        <source src='/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <GameConditions location={gameConditions.location} wind={gameConditions.windDirection} distance={gameConditions.distance} />
      <img
        src={planes[currentIndex]}
        alt="orv9"
        className='orv-9'
      />
      <NextButton onClick={handleNext} />
      <PreviousButton onClick={handlePrev} />
      <LaunchButton plane={currentPlaneName} gameConditions={gameConditions} />
    </div>
  )
}