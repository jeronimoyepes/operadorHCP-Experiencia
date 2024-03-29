import StationTimeline from "../stationTimeline";
import { useContext, useEffect, useState } from "react";
import styles from "./stationsRenderer.module.scss";

// Datos de interacción de cada estación
import { articInteractions } from "../interactionsData/articInteractions";
import { submarineInteractions } from "../interactionsData/submarineInteractions";
import { lunarInteractions } from "../interactionsData/lunarInteractions";  
import { UserContext } from "pages/_app";
import { TimerContext } from "pages/mainExperience";

export default function StationsRenderer({ experienceTimer, currentStation }) {
  const [interactionData, setInteractionData] = useState();

  const { sendDataToAPI } = useContext(UserContext);
  const context = useContext(TimerContext);



  useEffect(() => {
    sendDataToAPI({
      page: `station-${currentStation.id}`,
      timeElapsed: context.timeElapsed
    });
    switch (currentStation.id) {
      case "artic":
        return setInteractionData(articInteractions);
      case "submarine":
        return setInteractionData(submarineInteractions);
      case "lunar":
        return setInteractionData(lunarInteractions);
    }
  }, [currentStation]);

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
      <div className={styles.renderStation}>
        {interactionData && (
          <StationTimeline interactionData={interactionData} currentStation={currentStation} />
        )}
      </div>
    </div>
  );
}
