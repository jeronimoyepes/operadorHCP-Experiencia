import styles from "./timeLine.module.scss";

export function TimeLine({ timeLineData, stationData }) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <img src={`station-${stationData.id}.svg`} alt="Lunar" />
        <p>{stationData.name}</p>
      </div>
      <div className={styles.line}>
        {timeLineData.map((momment, index) => {
          return (
            <div key={index} className={styles.momment}>
              <img
                className={styles.interactionIcon}
                src={`reportType-${momment.type}.svg`}
                alt=""
              />
              {/* <img
                className={styles.separator}
                src="momentSeparator.svg"
                alt=""
              /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
