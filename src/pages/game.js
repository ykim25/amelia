import React, { useEffect, useState } from 'react';
import styles from './game.css'; // Ensure the correct path to your CSS file
import Orv9 from '../components/planes/Orv9';
import Neha1 from '../components/planes/Neha1';
import Melia from '../components/planes/Melia';
import Tom6 from '../components/planes/Tom6';
import Will7 from '../components/planes/Will7';
import Mav5 from '../components/planes/Mav5';
import Buster from '../components/planes/Buster';
import NextButton from '../components/buttons/NextButton';
import PreviousButton from '../components/buttons/PreviousButton';
import axios from 'axios';

export default function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameConditions, setGameConditions] = useState({
    location: null,
    windSpeed: null,
    windDirection: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        
      } catch (error) {
        
      }
    }
    const randomDirection = Math.random() < 0.5 ? 'left' : 'right';
  }, []);

  const planes = [Orv9, Neha1, Melia, Tom6, Will7, Mav5, Buster];

  const CurrentPlane = planes[currentIndex];
  const [showPlanes, setShowPlanes] = useState(false);

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
      {/* later create a wrapper or something to contain current plane and buttons and conditionally render after user clicks start*/}
      {/* {showPlanes && <CurrentPlane/>} */}
      {/* or something like showPlanes && <PlaneSelectionWrapper/> <-- contains prev, next and launch */}
      <CurrentPlane />
      <div>
        <PreviousButton onClick={handlePrev} />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
}
