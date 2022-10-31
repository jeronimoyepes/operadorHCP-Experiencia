import { TimeLine } from '../../components/timeLine/timeLine';
import { Layout } from "@/components/layout/Layout";
import styles from "./finalReport.module.scss";
import { articInteractions } from '@/components/stations/interactionsData/articInteractions';

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
        <TimeLine timeLineData={articInteractions}/>
      </div>
    </Layout>
  );
}
