import { TimeLine } from "../../components/timeLine/timeLine";
import { Layout } from "@/components/layout/Layout";
import styles from "./finalReport.module.scss";
import { articInteractions } from "@/components/stations/interactionsData/articInteractions";
import { lunarInteractions } from "@/components/stations/interactionsData/lunarInteractions";
import { submarineInteractions } from "@/components/stations/interactionsData/submarineInteractions";

export default function FinalReport() {
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
    </Layout>
  );
}
