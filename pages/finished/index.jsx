import { useEffect } from "react";
import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import BorderContainer from "@/components/borderContainer/BorderContainer";
import { Layout } from "@/components/layout/Layout";

import styles from "./finished.module.scss";

export default function Finished() {
  const asideGeneralData = {
    // h1: "",
    // h2: "",
    pageDescription: "Sincronización terminada",
    // date: "04/10/22",
    img: "randomCode.png",
  };

  useEffect(() => {
    setInterval(() => {
      window.location.assign("/finalReport");
    }, 4000);
  }, []);

  return (
    <Layout title={"Conectando..."}>
      <div className={styles.container}>
        <AsideGeneral props={asideGeneralData} />
        <div className={styles.satImage}>
          <BorderContainer>
            <img src="/sateliteFinished.gif" alt="" />
          </BorderContainer>
        </div>
      </div>
    </Layout>
  );
}
