import styles from "./Mav5selected.module.css";
const Mav5selected = () => {
  return (
    <div className={styles.mav5selected}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>MAV-5</div>
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.thrust}>launch</div>
      </div>
      <img className={styles.mav5selectedChild} alt="" src="/group-211.svg" />
      <div className={styles.mav5selectedInner}>
        <div className={styles.thrustParent}>
          <div className={styles.thrust}>Thrust: ++</div>
          <div className={styles.thrust}>{`Weight: - `}</div>
          <div className={styles.thrust}>Lift: +</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>6/7</div>
      </div>
    </div>
  );
};

export default Mav5selected;
