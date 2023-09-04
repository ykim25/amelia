import styles from './LaunchButton.module.css';
import { useNavigate } from 'react-router-dom';
import { calculateOutcome } from '../../../utils/calculateOutcome';
const LaunchButton = ({ plane, gameConditions }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    const result = calculateOutcome(plane, gameConditions);
    console.log(`result: ${result}`);
    navigate(`/video/${result}`)
  };
  return (
    <div className={styles.launch} onClick={handleClick}>
      <div className={styles.launch1}>launch</div>
    </div>
  );
};

export default LaunchButton;