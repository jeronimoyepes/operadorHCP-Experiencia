import { useEffect, useState } from "react";

// Modules

import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";

const page2 = () => {
  const pages = { prev: 1, next: 3 };
  const pageCounter = [
    { fill: false },
    { fill: true },
    { fill: false },
    { fill: false },
  ];
  const controlsData = [
    {
      name: "siguiente >",
      image: "/button-1.svg",
    },
    {
      name: "< anterior",
      image: "/button-3.svg",
    },
  ];
  return (
    <Layout title={"Instructions"}>
      <InstructionRenderer
        pages={pages}
        pageCounter={pageCounter}
        controlsData={controlsData}
      >
        <div className={styles.container}>
          <p>
            Las estaciones emiten reportes constantemente y de manera
            simultanea.
          </p>
          <p>¡No te pierdas de nada!</p>
          <div>
            <img src="/stationsSignals.gif" alt="" />
          </div>
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default page2;
