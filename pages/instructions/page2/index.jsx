import { useEffect, useState } from "react";

// Modules

import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";

const page2 = () => {
  const pages = { prev: 1, next: 2 };
  const pageCounter = [
    { fill: false },
    { fill: true },
    { fill: false },
    { fill: false },
  ];
  return (
    <Layout>
      <InstructionRenderer pages={pages} pageCounter={pageCounter}>
        <div className={styles.container}>
          <h3>Bienvenido estimado operador.</h3>
          <p>
            el día de hoy estarás a cargo de supervisar las operaciones de
            investigacion científica de las siguientes bases de observación:
          </p>
          <img src="/stationsList.svg" alt="" />
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default page2;
