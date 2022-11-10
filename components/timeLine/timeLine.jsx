import { useEffect } from "react";
import styles from "./timeLine.module.scss";

export function TimeLine({ timeLineData, stationData, viewedInteractions }) {

  useEffect(() => {
    console.log("viewedInteractions", viewedInteractions)
  }, [])
  

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <img src={`station-${stationData.id}.svg`} alt="Lunar" />
        <p>{stationData.name}</p>
      </div>
      <div className={styles.line}>
        {viewedInteractions && timeLineData.map((momment, index) => {
          return (
            <div key={index} className={styles.momment}>
              <div
                className={
                  viewedInteractions.some(
                    (interacion) => interacion == momment.id
                  ) ? styles.viewed : undefined
                }
              >
                <img
                  className={styles.interactionIcon}
                  src={`reportType-${momment.type}.svg`}
                  alt=""
                />
                <p>{momment.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
