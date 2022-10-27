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
        <img src={`station-${currentStation.id}.svg`} alt="" />
        <h2>Base {currentStation.name}</h2>
        <div>{experienceTimer}</div>
      </div>
      <div>{renderStation()}</div>
    </div>
  );
}
