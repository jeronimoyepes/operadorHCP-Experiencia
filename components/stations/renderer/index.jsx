import { useEffect } from "react";
import Artic from "../artic";
import Lunar from "../lunar";
import Submarine from "../submarine";
import styles from "./stationsRenderer.module.scss";

export default function StationsRenderer({ currentStation }) {
  function renderStation() {
    switch (currentStation) {
      case "artic":
        return <Artic />;
        break;
      case "submarine":
        return <Submarine />;
        break;
      case "lunar":
        return <Lunar />;
        break;
    }
  }

  return <div className={styles.props}>{renderStation()}</div>;
}
