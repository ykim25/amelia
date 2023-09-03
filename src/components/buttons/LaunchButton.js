import styles from './LaunchButton.module.css';
const LaunchButton = ({ plane }) => {
  const handleClick = () => {
    console.log(`current plane: ${plane}`);
  };
  return (
    <div className={styles.launch} onClick={handleClick}>
      <div className={styles.launch1}>launch</div>
    </div>
  );
};

export default LaunchButton;
