import styles from "./timeLine.module.scss";

export function TimeLine({ timeLineData }) {
  return (
    <div>
      <div className={styles.label}>
        <img src="station-lunar.svg" alt="Lunar" />
        <p>Lunar</p>
      </div>
      <div className={styles.line}>
        {timeLineData.map((moment) => {
          <div className={styles.moment}>
            <img src={`reportType-${moment.type}.svg`} alt="" />
            <img src="momentSeparator.svg" alt="" />
          </div>;
        })}
      </div>
    </div>
  );
}
