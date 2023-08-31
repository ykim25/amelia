import styles from "./Tablet.module.css";
const Tablet = () => {
  return (
    <div className={styles.tablet}>
      <div className={styles.tv2}>
        <img className={styles.backgroundIcon} alt="" src="/background2.svg" />
        <div className={styles.locationCupertinoParent}>
          <div className={styles.locationCupertino}>Location: Cupertino</div>
          <div className={styles.locationCupertino}>{`Wind: --> 9 mph`}</div>
          <div className={styles.locationCupertino}>Distance: 25 mi</div>
        </div>
        <div className={styles.rSide}>
          <img className={styles.hillsIcon} alt="" src="/hills1.svg" />
          <img className={styles.towerIcon} alt="" src="/tower3.svg" />
          <div className={styles.target}>
            <div className={styles.red}>
              <div className={styles.target1} />
              <img className={styles.targetIcon} alt="" src="/target3.svg" />
            </div>
            <img className={styles.targetChild} alt="" src="/polygon-61.svg" />
            <div className={styles.landHere}>Land Here</div>
          </div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
        <div className={styles.sparkles}>
          <div className={styles.sparklesChild} />
          <div className={styles.sparklesItem} />
          <div className={styles.sparklesInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.sparklesChild1} />
          <div className={styles.sparklesChild2} />
          <div className={styles.sparklesChild3} />
          <div className={styles.sparklesChild4} />
          <div className={styles.sparklesChild5} />
        </div>
        <img className={styles.lSideIcon} alt="" src="/l-side3.svg" />
        <div className={styles.ui}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.lift}>
              <div className={styles.highLift}>LIFT</div>
            </div>
          </div>
          <div className={styles.nextWrapper}>
            <div className={styles.locationCupertino}>next</div>
          </div>
          <img className={styles.uiChild} alt="" src="/group-213.svg" />
          <div className={styles.highLiftWrapper}>
            <div className={styles.highLift}>High Lift</div>
          </div>
        </div>
        <div className={styles.water} />
      </div>
    </div>
  );
};

export default Tablet;
