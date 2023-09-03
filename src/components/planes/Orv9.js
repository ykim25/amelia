import styles from './Orv9.module.css';
import LaunchButton from '../buttons/LaunchButton';
const Orv9 = () => {
  return (
    <div className={styles.orv9selected}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>ORV-9</div>
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.thrust}>
          <LaunchButton plane={'Orv9'} />
        </div>
      </div>
      <img className={styles.orv9selectedChild} alt='' src='/group-216.svg' />
      <div className={styles.orv9selectedInner}>
        <div className={styles.thrustParent}>
          <div className={styles.thrust}>Thrust: Ø</div>
          <div className={styles.thrust}>Weight: - -</div>
          <div className={styles.thrust}>Lift: Ø</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>1/7</div>
      </div>
    </div>
  );
};

export default Orv9;
