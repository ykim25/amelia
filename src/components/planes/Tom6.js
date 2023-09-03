import styles from "./Tom6.module.css";
const Tom6 = () => {
  return (
    <div className={styles.tom6selected}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>TOM-6</div>
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.thrust}>launch</div>
      </div>
      <img className={styles.tom6selectedChild} alt="" src="/group-213.svg" />
      <div className={styles.tom6selectedInner}>
        <div className={styles.thrustParent}>
          <div className={styles.thrust}>Thrust: +</div>
          <div className={styles.thrust}>{`Weight: - `}</div>
          <div className={styles.thrust}>Lift: +</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>4/7</div>
      </div>
    </div>
  );
};

export default Tom6;
