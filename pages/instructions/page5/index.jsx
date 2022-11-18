import { useEffect, useRef, useState } from "react";

// Modules

import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";
import keystrokesValues from "@/helpers/keystrokesValues";

const Page5 = () => {

  const quitResponse = useRef(null)

  const pages = { prev: 4, next: 6 };
  const controlsData = [
    {
      name: "¡comenzar!",
      image: "/button-0.svg",
    },
    {
      name: "renunciar",
      image: "/button-1.svg",
    },
    {
      name: "regresar",
      image: "/button-2.svg",
    },
  ];
  return (
    <Layout title={"Instructions"}>
      <InstructionRenderer
        pages={pages}
        controlsData={controlsData}
        quitResponse={quitResponse}
      >
        <div className={styles.container}>
          <p>
            Al finalizar tu turno de supervisión te daremos un reporte de
            rendimiento.
          </p>
          <p>
            Continúa querido operador, la iniciativa científica HCP espera
            grandes cosas de ti.
          </p>
          <p>
            ATT. Directiva de la HCP <img src="/heart.svg" alt="" />
          </p>
          <p ref={quitResponse}></p>
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default Page5;
