import { useContext, useEffect } from "react";

import styles from "./sateliteConection.module.scss";

import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import BorderContainer from "@/components/borderContainer/BorderContainer";
import { Layout } from "@/components/layout/Layout";
import Router from "next/router";
import { UserContext } from "pages/_app";

export default function SateliteConection() {
  const { sendDataToAPI } = useContext(UserContext);

  const asideGeneralData = {
    // h1: "",
    // h2: "",
    pageDescription: "Esperando sincronización con satélite",
    // date: "04/10/22",
    img: "randomCode.png",
  };

  useEffect(() => {
    setInterval(() => {
      Router.push("/mainExperience");
    }, 8000);
    sendDataToAPI({
      page: "sateliteConection",
    });
  }, []);

  return (
    <Layout title={"Conectando..."}>
      <div className={styles.container}>
        <AsideGeneral props={asideGeneralData} />
        <div className={styles.satImage}>
          <BorderContainer>
            <img src="/satelite.gif" alt="" />
          </BorderContainer>
        </div>
      </div>
    </Layout>
  );
}
