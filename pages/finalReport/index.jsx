import { TimeLine } from "../../components/timeLine/timeLine";
import { Layout } from "@/components/layout/Layout";
import styles from "./finalReport.module.scss";
import { articInteractions } from "@/components/stations/interactionsData/articInteractions";
import { lunarInteractions } from "@/components/stations/interactionsData/lunarInteractions";
import { submarineInteractions } from "@/components/stations/interactionsData/submarineInteractions";
import { durationMinutes } from "@/helpers/experienceDuration";
import keystrokes from "@/helpers/keystrokesValues";
import { useContext, useEffect } from "react";
import { UserContext } from "pages/_app";


export default function FinalReport() {

  const { sendDataToAPI } = useContext(UserContext);

  const stationData = {
    artic: {
      name: "Ártico",
      id: "artic",
    },
    submarine: {
      name: "Submarina",
      id: "submarine",
    },
    lunar: {
      name: "Lunar",
      id: "lunar",
    },
  };
  // Tuve que hacer eso porque no puedo poner un for loop en el html :I
  let minutesAmount = [];
  for (let i = 0; i <= durationMinutes; i++) {
    minutesAmount.push(<span key={i}>{i}m</span>)
  }

  useEffect(() => {
    function handleKeyFinish(e) {
      const key = e.key;
      if (key == keystrokes.button2) {
        window.removeEventListener("keyup", handleKeyFinish);
        window.location.assign("/") // Se usa window.location para refrescar la página y así reinicar UserState que contiene el userHash
      }
    }
    window.addEventListener("keyup", handleKeyFinish);

    sendDataToAPI({
      page: "finalReport",
    });
  }, [])
  

  return (
    <Layout title={"Reporte"}>
      <div className={styles.header}>
        <h2>Reporte de rendimiento</h2>
        <div>
          <p>Gracias por tu valioso tiempo operador. HCP.</p>
          <img src="warn-lines.svg" alt="" />
        </div>
      </div>
      <div className={styles.timelines}>
        <p>Estaciones</p>
        <TimeLine
          stationData={stationData.artic}
          timeLineData={articInteractions}
        />
        <TimeLine
          stationData={stationData.submarine}
          timeLineData={submarineInteractions}
        />
        <TimeLine
          stationData={stationData.lunar}
          timeLineData={lunarInteractions}
        />
      </div>
      <div className={styles.minutesLabel}>
        <div className={styles.minutes}>{minutesAmount.map(minute => {
          return minute
        })}</div>
        <p>Tiempo en línea</p>
      </div>
    </Layout>
  );
}
