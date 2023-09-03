import styles from './Mav5.module.css';
import LaunchButton from '../buttons/LaunchButton';
const Mav5 = () => {
  return (
    <div className={styles.mav5selected}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>MAV-5</div>
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.thrust}>
          <LaunchButton plane={'Mav5'} />
        </div>
      </div>
      <img className={styles.mav5selectedChild} alt='' src='/group-211.svg' />
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

export default Mav5;
