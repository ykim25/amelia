import styles from './Melia.module.css';
import LaunchButton from '../buttons/LaunchButton';
const Melia = () => {
  return (
    <div className={styles.meliaselected}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lift}>
          <div className={styles.div}>MELIA</div>
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.thrust}>
          <LaunchButton plane={'Melia'} />
        </div>
      </div>
      <img className={styles.meliaselectedChild} alt='' src='/group-214.svg' />
      <div className={styles.meliaselectedInner}>
        <div className={styles.thrustParent}>
          <div className={styles.thrust}>Thrust: ++</div>
          <div className={styles.thrust}>Weight: Ø</div>
          <div className={styles.thrust}>Lift: Ø</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>3/7</div>
      </div>
    </div>
  );
};

export default Melia;
