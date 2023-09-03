import styles from "./Lose.module.css";
const Lose = () => {
  return (
    <div className={styles.lose}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.youLose}>You LOSE</div>
        </div>
      </div>
      <div className={styles.playagain}>
        <div className={styles.playAgain}>play again</div>
      </div>
      <img className={styles.loseChild} alt="" src="/frame-81.svg" />
    </div>
  );
};

export default Lose;
