import { Layout } from "@/components/layout/Layout";
import styles from "./finalReport.module.scss";

export default function FinalReport() {
  return (
    <Layout title={"Reporte"}>
      <div className={styles.header}>
        <h2>Reporte de rendimiento</h2>
        <div>
          <p>Gracias por tu valioso tiempo operados. HCP.</p>
          <img src="warn-lines.svg" alt="" />
        </div>
      </div>
      <div className={styles.timelines}>
        <p>Estaciones</p>
        <div>
          <div className={styles.label}>
            <img src="station-lunar.svg" alt="Lunar" />
            <p>Lunar</p>
          </div>
          <div className={styles.line}>
            
          </div>
        </div>
      </div>
    </Layout>
  );
}
