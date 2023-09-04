import styles from "./PlayAgainButton.module.css";
import { useNavigate } from "react-router-dom";

const PlayAgainButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/game')
  }

  return (
    <div className={styles.playAgain} onClick={handleClick}>
      PLAY AGAIN WOOOO
    </div>
  );
};

export default PlayAgainButton;