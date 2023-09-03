import styles from "./UI4.module.css";
const UI4 = () => {
  return (
    <div className={styles.ui}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>ORV-9</div>
        </div>
      </div>
      <div className={styles.launchWrapper}>
        <div className={styles.launch}>launch</div>
      </div>
      <img className={styles.uiChild} alt="" src="/group-2141.svg" />
      <div className={styles.uiInner}>
        <div className={styles.thrustParent}>
          <div className={styles.launch}>Thrust: Ø</div>
          <div className={styles.launch}>Weight: - -</div>
          <div className={styles.launch}>Lift: Ø</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>1/7</div>
      </div>
    </div>
  );
};

export default UI4;
