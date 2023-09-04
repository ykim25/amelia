import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.css';
import PlayButton from '../pages/components/buttons/PlayButton.png';
import Logo from '../pages/components/logo/AmeliaLogo.png';

export default function Home() {
  return (
    <div className={styles.backgroundContainer}>
      <video autoPlay loop muted playsInline>
        <source src='/background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <img
        src={Logo}
        alt="amelia-logo"
        className='amelia-logo'
      />

      <Link to="/game">
        <img src={PlayButton} alt="Play" className='play-button' />
      </Link>
    </div>
  );
}
