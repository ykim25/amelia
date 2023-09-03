import styles from "./UI6.module.css";
const UI6 = () => {
  return (
    <div className={styles.ui}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>NEHA-1</div>
        </div>
      </div>
      <div className={styles.launchWrapper}>
        <div className={styles.launch}>launch</div>
      </div>
      <img className={styles.uiChild} alt="" src="/group-2161.svg" />
      <div className={styles.uiInner}>
        <div className={styles.thrustParent}>
          <div className={styles.launch}>Thrust: ++</div>
          <div className={styles.launch}>Weight: Ø</div>
          <div className={styles.launch}>Lift: ++</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>2/7</div>
      </div>
    </div>
  );
};

export default UI6;
