import { Layout } from "@/components/layout/Layout";
import { readFromFirebase } from "pages/api/firebaseCofig";
import { UserContext } from "pages/_app";
import { useContext, useEffect } from "react";
import styles from "./admin.module.scss";

export default function Admin() {
  const { sendDataToAPI, viewedInteractions } = useContext(UserContext);

  return (
    <Layout title={"Admin"}>
      <div className={styles.container}>
        <h1>Veo que eres un directivo de la HCP</h1>
        <button>Descargar reporte</button>
      </div>
    </Layout>
  );
}
