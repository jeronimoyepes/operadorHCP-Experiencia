import { useEffect, useState } from "react";

// Modules

import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";

const page2 = () => {
  const pages = { prev: 3, next: 5 };
  const pageCounter = [
    { fill: false },
    { fill: false },
    { fill: false },
    { fill: true },
  ];
  return (
    <Layout>
      <InstructionRenderer pages={pages} pageCounter={pageCounter}>
        <div className={styles.container}>
          <p>
            Los resportes enviados pueden ser de múltiples tipos y cada uno te pedirá usar diferentes controles del tablero.
          </p>
          <img src="/stationsList.svg" alt="" />
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default page2;
