import { useEffect } from "react";
import Artic from "../artic";
import Lunar from "../lunar";
import Submarine from "../submarine";
import styles from "./stationsRenderer.module.scss";

export default function StationsRenderer({ experienceTimer, currentStation }) {
  function renderStation() {
    switch (currentStation.id) {
      case "artic":
        return <Artic />;
      case "submarine":
        return <Submarine />;
      case "lunar":
        return <Lunar />;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <div className={styles.stationIcon}>
          <img src={`station-${currentStation.id}.svg`} alt="" />
          <h2>Estación {currentStation.name}</h2>
        </div>
        <div className={styles.windowName}>
          <p>{">>"}</p>
          <p>bandeja de informes</p>
        </div>
        <div className={styles.timer}>
          <img src="/cutSatelite.png" alt="" />
          <div>
            <p>tiempo restante</p>
            <h2>{experienceTimer}</h2>
          </div>
        </div>
      </div>
      <div className={styles.renderStation}>{renderStation()}</div>
    </div>
  );
}
