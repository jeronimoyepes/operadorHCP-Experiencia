import { useEffect, useState } from "react";

// Modules

import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";

const Page1 = () => {
  const pages = { prev: 0, next: 2 };
  const pageCounter = [
    { fill: true },
    { fill: false },
    { fill: false },
    { fill: false },
  ];
  const controlsData = [
    {
      name: "siguiente >",
      image: "/button-1.svg",
    }
  ];
  return (
    <Layout title={"Instructions"}>
      <InstructionRenderer pages={pages} pageCounter={pageCounter} controlsData={controlsData}>
        <div className={styles.container}>
          <h3>Bienvenido estimado operador.</h3>
          <p>
            el día de hoy estarás a cargo de supervisar las operaciones de
            investigacion científica de las siguientes estaciones de observación:
          </p>
          <div>
            <img src="/stationsList.png" alt="" />
          </div>
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default Page1;
