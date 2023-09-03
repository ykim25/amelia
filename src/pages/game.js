import React, { useState } from 'react';
import styles from './game.css'; // Ensure the correct path to your CSS file
import Orv9 from '../components/planes/Orv9';
import Neha1 from '../components/planes/Neha1';
import Melia from '../components/planes/Melia';
import Tom6 from '../components/planes/Tom6';
import Will7 from '../components/planes/Will7';
import Mav5 from '../components/planes/Mav5';
import Buster from '../components/planes/Buster';
export default function Game() {
  const [viewPlanes, setViewPlanes] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const planes = [
    <Orv9 />,
    <Neha1 />,
    <Melia />,
    <Tom6 />,
    <Will7 />,
    <Mav5 />,
    <Buster />,
  ];

  const CurrentPlane = planes[currentIndex];
  //also handle hovers when hovering the arrows
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? planes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === planes.length - 1 ? 0 : prev + 1));
  };
  //with launch button, turn off view planes --> Or just play the graphic ? 
  return (
    <div className={styles.backgroundContainer}>
      <video autoPlay loop muted playsInline>
        <source src='/background.mp4' type='video/mp4' />{' '}
        {/* Update the path */}
        Your browser does not support the video tag.
      </video>
      {viewPlanes && <CurrentPlane />}
    </div>
  );
}
