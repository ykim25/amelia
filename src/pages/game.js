import React, { useState } from 'react';
import styles from './game.css';

// Planes
import Orv9 from '../pages/components/planes/Orv9.png';
import Neha1 from '../pages/components/planes/Neha1.png';
import Melia from '../pages/components/planes/Melia.png';
import Tom6 from '../pages/components/planes/Tom6.png';
import Will7 from '../pages/components/planes/Will7.png';
import Mav5 from '../pages/components/planes/Mav5.png';
import Buster from '../pages/components/planes/Buster.png';

// Buttons
import Launch from '../pages/components/buttons/Launch.png';
import PlayAgain from '../pages/components/buttons/PlayAgain.png';
import PlayButton from '../pages/components/buttons/PlayButton.png';

// Popups
import Win from '../pages/components/popups/Win.png';
import Lose from '../pages/components/popups/Lose.png';

// Logo
import Logo from '../pages/components/logo/AmeliaLogo.png'

export default function Game() {

  return (
    <div className={styles.backgroundContainer}>

      <video autoPlay loop muted playsInline>
        <source src='/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <img
        src={Logo}
        alt="Orv9"
        className='amelia-logo'
      />

      <img src={PlayButton} alt="Play" className='play-button' />
    </div>
  );
}
