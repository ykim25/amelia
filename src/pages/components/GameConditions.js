import styles from './GameConditions.module.css';

const GameConditions = ({ location, wind, distance }) => {
  console.log('WIND: ', wind)
  const arrow = wind === 2 ? '-->' : wind === -2 ? '<--' : ''
  return (
    <div className={styles.gameConditions}>
      <div className={styles.title}>Location: Cupertino</div>
      <div className={styles.title}>Wind: 3 mph</div>
      <div>Distance: 25 mi</div>
    </div>
  );
};

export default GameConditions;