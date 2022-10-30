import { useEffect, useState } from "react";

// Modules

import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";

const Page4 = () => {
  const pages = { prev: 3, next: 5 };
  const pageCounter = [
    { fill: false },
    { fill: false },
    { fill: false },
    { fill: true },
  ];
  const controlsData = [
    {
      name: "siguiente >",
      image: "/button-0.svg",
    },
    {
      name: "< anterior",
      image: "/button-2.svg",
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
            Los resportes enviados pueden ser de múltiples tipos y cada uno te
            pedirá usar diferentes controles del tablero.
          </p>
          <div>
            <img src="/reportTypeControl.gif" alt="" />
          </div>
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default Page4;
