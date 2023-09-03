import styles from "./UI1.module.css";
const UI1 = () => {
  return (
    <div className={styles.ui}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.lift1}>You WIn</div>
        </div>
      </div>
      <div className={styles.playAgain}>
        <div className={styles.playAgain1}>play again</div>
      </div>
      <img className={styles.uiChild} alt="" src="/frame-811.svg" />
    </div>
  );
};

export default UI1;
