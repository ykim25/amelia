import styles from "./Will7selected.module.css";
const Will7selected = () => {
  return (
    <div className={styles.will7selected}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>WILL-7</div>
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.thrust}>launch</div>
      </div>
      <img className={styles.will7selectedChild} alt="" src="/group-212.svg" />
      <div className={styles.will7selectedInner}>
        <div className={styles.thrustParent}>
          <div className={styles.thrust}>Thrust: ++</div>
          <div className={styles.thrust}>{`Weight: - `}</div>
          <div className={styles.thrust}>Lift: ++</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>5/7</div>
      </div>
    </div>
  );
};

export default Will7selected;
