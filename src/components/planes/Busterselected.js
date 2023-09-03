import styles from "./Busterselected.module.css";
const Busterselected = () => {
  return (
    <div className={styles.busterselected}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>BUST3R</div>
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.thrust}>launch</div>
      </div>
      <img className={styles.busterselectedChild} alt="" src="/group-21.svg" />
      <div className={styles.busterselectedInner}>
        <div className={styles.thrustParent}>
          <div className={styles.thrust}>Thrust: ++++</div>
          <div className={styles.thrust}>Weight: Ø</div>
          <div className={styles.thrust}>Lift: Ø</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>7/7</div>
      </div>
    </div>
  );
};

export default Busterselected;
