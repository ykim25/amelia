import styles from './GameConditions.module.css';

const GameConditions = ({ location, wind, distance }) => {
  return (
    <div className={styles.gameConditions}>
      <div> Location: {location}</div>
      <div>Wind: {wind}</div>
      <div>Distance: {distance}</div>
    </div>
  );
};

export default GameConditions;
