import { useEffect, useState } from "react";

// Modules

import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";

const page2 = () => {
  const pages = { prev: 2, next: 4 };
  const pageCounter = [
    { fill: false },
    { fill: false },
    { fill: true },
    { fill: false },
  ];
  return (
    <Layout>
      <InstructionRenderer pages={pages} pageCounter={pageCounter}>
        <div className={styles.container}>
          <p>
            Para observar los reportes conéctate a cada estación desde el tablero de control.
          </p>
          <img src="/stationsList.svg" alt="" />
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default page2;
