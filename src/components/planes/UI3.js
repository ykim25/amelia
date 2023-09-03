import styles from "./UI3.module.css";
const UI3 = () => {
  return (
    <div className={styles.ui}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>TOM-6</div>
        </div>
      </div>
      <div className={styles.launchWrapper}>
        <div className={styles.launch}>launch</div>
      </div>
      <img className={styles.uiChild} alt="" src="/group-2131.svg" />
      <div className={styles.uiInner}>
        <div className={styles.thrustParent}>
          <div className={styles.launch}>Thrust: +</div>
          <div className={styles.launch}>{`Weight: - `}</div>
          <div className={styles.launch}>Lift: +</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>4/7</div>
      </div>
    </div>
  );
};

export default UI3;
