import styles from './Neha1.module.css';
import LaunchButton from '../buttons/LaunchButton';
const Neha1 = () => {
  return (
    <div className={styles.neha1selected}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>NEHA-1</div>
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.thrust}>
          <LaunchButton plane={'Neha1'} />
        </div>
      </div>
      <img className={styles.neha1selectedChild} alt='' src='/group-215.svg' />
      <div className={styles.neha1selectedInner}>
        <div className={styles.thrustParent}>
          <div className={styles.thrust}>Thrust: ++</div>
          <div className={styles.thrust}>Weight: Ø</div>
          <div className={styles.thrust}>Lift: ++</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>2/7</div>
      </div>
    </div>
  );
};

export default Neha1;
