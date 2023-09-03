import styles from './LaunchButton.module.css';
import { calculateOutcome } from '../../utils/calculateOutcome';
const LaunchButton = ({ plane }) => {
  const handleClick = () => {
    console.log(`current plane: ${plane}`);
    const result = calculateOutcome(plane);
    console.log(`result: ${result}`);
  };
  return (
    <div className={styles.launch} onClick={handleClick}>
      <div className={styles.launch1}>launch</div>
    </div>
  );
};

export default LaunchButton;
