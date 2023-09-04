import React, { useState } from 'react';
import styles from './game.css';
import PlayButton from '../pages/components/buttons/PlayButton.png';
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
