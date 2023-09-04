import styles from './NextButton.module.css';

const NextButton = ({ onClick }) => {
  return (
    <div className={styles.next}>
      {/* Apply the onClick prop to the button */}
      <button onClick={onClick} className={styles.next1}>
        HELLOOOOOO NEXTaa BUTTON
      </button>
    </div>
  );
};

export default NextButton;