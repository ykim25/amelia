import styles from "./TV1.module.css";
const TV1 = () => {
  return (
    <div className={styles.tv1}>
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <div className={styles.locationCupertinoParent}>
        <div className={styles.locationCupertino}>Location: Cupertino</div>
        <div className={styles.locationCupertino}>{`Wind: --> 9 mph`}</div>
        <div className={styles.locationCupertino}>Distance: 25 mi</div>
      </div>
      <div className={styles.rSide}>
        <img className={styles.hillsIcon} alt="" src="/hills.svg" />
        <img className={styles.towerIcon} alt="" src="/tower.svg" />
        <div className={styles.target}>
          <div className={styles.red}>
            <div className={styles.target1} />
            <img className={styles.targetIcon} alt="" src="/target.svg" />
          </div>
          <img className={styles.targetChild} alt="" src="/polygon-6.svg" />
          <div className={styles.landHere}>Land Here</div>
        </div>
      </div>
      <img className={styles.treeIcon} alt="" src="/tree.svg" />
      <img className={styles.lSideIcon} alt="" src="/l-side.svg" />
      <div className={styles.water} />
      <img
        className={styles.defaultPlaneIcon}
        alt=""
        src="/default-plane.svg"
      />
      <div className={styles.tv1Inner}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src="/polygon-7.svg" />
        </div>
      </div>
      <div className={styles.uiWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.lift}>
              <div className={styles.lift1}>LIFT</div>
            </div>
          </div>
          <div className={styles.nextWrapper}>
            <div className={styles.locationCupertino}>next</div>
          </div>
          <img className={styles.uiChild} alt="" src="/group-21.svg" />
          <div className={styles.highLiftWrapper}>
            <div className={styles.highLift}>High Lift</div>
          </div>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <img className={styles.ameliaIcon} alt="" src="/amelia.svg" />
      <div className={styles.tv1Child} />
      <div className={styles.tv1Item} />
      <div className={styles.rectangleDiv} />
      <div className={styles.tv1Child1} />
      <div className={styles.tv1Child2} />
      <div className={styles.tv1Child3} />
      <div className={styles.tv1Child4} />
      <div className={styles.tv1Child5} />
      <div className={styles.tv1Child6} />
    </div>
  );
};

export default TV1;
