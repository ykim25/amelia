import styles from './GameConditions.module.css';

const GameConditions = ({ location, wind, distance }) => {
  console.log('WIND: ', wind)
  const arrow = wind === 2 ? '-->' : wind === -2 ? '<--' : ''
  return (
    <div className={styles.gameConditions}>
      {/* <div className={styles.title}>Location: {location} </div>
      <div className={styles.title}>Wind: {arrow} {wind} mph</div> */}
      <div className={styles.title}>Location: {Math.random()} </div>
      <div className={styles.title}>Wind: {arrow} {Math.random()} mph</div>
      <div>Distance: 25 mi</div>
    </div>
  );
};

export default GameConditions;