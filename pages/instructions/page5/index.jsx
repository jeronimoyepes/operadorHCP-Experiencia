import { useEffect, useState } from "react";

// Modules

import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";

const page2 = () => {
  const pages = { prev: 2, next: 3 };
  return (
    <Layout>
      <InstructionRenderer pages={pages}>
        <div className={styles.container}>
          <p>
            Al finalizar tu turno de supervisión te daremos un reporte de rendimiento.
          </p>
          <p>
            Continua querido operador, la iniciativa científica HCP espera grandes cosas de ti.
          </p>
          <p>ATT. Directiva de la HCP <img src="/heart.svg" alt="" /></p>
          
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default page2;
