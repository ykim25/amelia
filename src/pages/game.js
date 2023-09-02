import React from 'react';
import styles from './game.css'; // Ensure the correct path to your CSS file

export default function Game() {
  return (
    <div className={styles.backgroundContainer}>
      <video autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" /> {/* Update the path */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
