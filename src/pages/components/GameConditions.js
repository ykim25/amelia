import styles from './GameConditions.module.css';

const GameConditions = ({ location, wind, distance }) => {
  console.log('WIND: ', wind)
  const arrow = wind === 2 ? '-->' : wind === -2 ? '<--' : ''
  return (
    <div className={styles.gameConditions}>
      {/* <div className={styles.title}>Location: {location} </div>
      <div className={styles.title}>Wind: {arrow} {wind} mph</div>
      <div>Distance: 25 mi</div> */}
      <div className={styles.title}>Location: {"Irvine, CA"} </div>
      <div className={styles.title}>Wind: {arrow} {Math.round(Math.random() * 10) * 10} mph</div>
      <div className={styles.title}>Distance: {Math.round(Math.random() * 10) * 10} mi</div>
    </div>
  );
};

export default GameConditions;