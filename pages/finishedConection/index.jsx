import { useContext, useEffect } from "react";
import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import BorderContainer from "@/components/borderContainer/BorderContainer";
import { Layout } from "@/components/layout/Layout";
import { UserContext } from "pages/_app";


import styles from "./finished.module.scss";
import Router from "next/router";

export default function Finished() {

  const { sendDataToAPI } = useContext(UserContext);

  const asideGeneralData = {
    // h1: "",
    // h2: "",
    pageDescription: "Sincronización terminada",
    // date: "04/10/22",
    img: "randomCode.png",
  };

  useEffect(() => {
    setTimeout(() => {
      Router.push("/finalReport");
    }, 4000);
    sendDataToAPI({
      page: "finishedConection",
    });
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
