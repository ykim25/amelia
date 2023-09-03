import styles from "./UI.module.css";
const UI = () => {
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
      <img className={styles.uiChild} alt="" src="/frame-81.svg" />
    </div>
  );
};

export default UI;
