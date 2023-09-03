import styles from './PreviousButton.module.css';

const PreviousButton = ({ onClick }) => {
  return (
    <div className={styles.previous}>
      {/* Apply the onClick prop to the button */}
      <button onClick={onClick} className={styles.previous1}>
        HELLOOOOOO Previous BUTTON
      </button>
    </div>
  );
};

export default PreviousButton;
