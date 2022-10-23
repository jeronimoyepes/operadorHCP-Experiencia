import { useEffect, useState } from "react";

import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import { Layout } from "@/components/layout/Layout";
import PageRenderer from "@/components/instructions/pagerenderer";

import styles from "./instructions.module.scss";
const Instructions = () => {
  const [instructionPage, setInstructionPage] = useState(0);

  const pagesAmount = 4;

  useEffect(() => {
    document.addEventListener("keyup", function (event) {
      const key = event.key;
      console.log(key);
      if (key == "ArrowRight") {
        instructionPage == pagesAmount
          ? null
          : setInstructionPage(instructionPage++);
      }
      if (key == "ArrowLeft") {
        instructionPage == 0 ? null : setInstructionPage(instructionPage--);
      }
    });
  }, []);

  const asideGeneralData = {
    h1: "IC-HCP",
    h2: "Iniciativa científica",
    pageDescription: "Lista de actividades del operador",
    date: "04/10/22",
  };

  return (
    <Layout title="Actividades">
      <div className={styles.container}>
        <AsideGeneral props={asideGeneralData}></AsideGeneral>
        <div className={styles.pages}>
          {}
          <div>
            {/* {pagesAmount.map((page) => {
              return <a href="">a</a>;
            })} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Instructions;
