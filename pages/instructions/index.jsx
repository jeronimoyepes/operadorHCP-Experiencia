import { useEffect, useState } from "react";

// Modules
import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import { Layout } from "@/components/layout/Layout";

import styles from "./instructions.module.scss";

// Instruction pages
import Page0 from "@/components/instructions/instructionPage/Page0";
import Page1 from "@/components/instructions/instructionPage/Page1";
import Page2 from "@/components/instructions/instructionPage/Page2";
import Page3 from "@/components/instructions/instructionPage/Page3";

const Instructions = () => {
  const [instructionPage, setInstructionPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(<Page0 />);

  const pages = [
    <Page0 key="0" />,
    <Page1 key="1" />,
    <Page2 key="2" />,
    <Page3 key="3" />,
  ];

  useEffect(() => {
    document.addEventListener("keyup", function (event) {
      const key = event.key;
      if (key == "ArrowRight") {
        instructionPage == pages.length - 1
          ? null
          : setInstructionPage(instructionPage + 1);
      }
      if (key == "ArrowLeft") {
        instructionPage == 0 ? null : setInstructionPage(instructionPage - 1);
      }
      console.log(instructionPage);
    });
  }, []);

  // useEffect(() => {
  //   switch (instructionPage) {
  //     case 0:
  //       setCurrentComponent(<Page0 />);
  //       break;
  //     case 1:
  //       setCurrentComponent(<Page1 />);
  //       break;
  //     case 2:
  //       setCurrentComponent(<Page2 />);
  //       break;
  //     case 3:
  //       setCurrentComponent(<Page3 />);
  //       break;
  //   }
  // }, [instructionPage]);

  const getComponent = () => {
    let component;

    return component;
  };

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
          {currentPage}
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
