import styles from "./Lose.module.css";

const Lose = () => {
  return (
    <div className={styles.ui}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.youLose}>You LOSE</div>
        </div>
      </div>
      <div className={styles.playAgain}>
        <div className={styles.playAgain1}>play again</div>
      </div>
      <img className={styles.uiChild} alt="" src="../../../public/frame-81.svg" />
    </div>
  );
};

export default Lose;
