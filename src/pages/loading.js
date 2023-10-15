import { useState } from 'react';
import styles from './video.css';
import { useParams } from 'react-router-dom';
import PlayAgainButton from './components/buttons/PlayAgainButton';

import PlayAgain from '../pages/components/buttons/PlayAgain.png';
import Lose from '../pages/components/popups/Lose.png'
import Win from '../pages/components/popups/Win.png'

export default function Loading() {
  return (
    <div className={styles.backgroundContainer}>
      <video autoPlay muted playsInline >
        <source src='/LOADING.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

