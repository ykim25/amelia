import styles from "./Win.module.css";
const Win = () => {
  return (
    <div className={styles.win}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.lift1}>You WIn</div>
        </div>
      </div>
      <div className={styles.playagain}>
        <div className={styles.playAgain}>play again</div>
      </div>
      <img className={styles.winChild} alt="" src="/frame-811.svg" />
    </div>
  );
};

export default Win;
