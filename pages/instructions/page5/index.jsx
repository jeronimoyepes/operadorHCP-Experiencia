import { useEffect, useState } from "react";

// Modules

import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";

const page2 = () => {
  const pages = { prev: 4, next: 6 };
  const controlsData = [
    {
      name: "¡comenzar!",
      image: "/button-1.svg",
    },
    {
      name: "agradecer a la HCP",
      image: "/button-2.svg",
    },
    {
      name: "renunciar",
      image: "/button-3.svg",
    },
  ];
  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key;
      if (key == "z") {
        console.log("Comenzar")
        document.removeEventListener("keyup", handleKeyDown);
        return location.replace("/sateliteConection")
      }
      if (key == "x") {
        console.log("Agradecer a la HCP")
      }
      if (key == "c") {
        console.log("Renunciar")
      }
    }
    document.addEventListener("keyup", handleKeyDown);
  }, []);
  return (
    <Layout title={"Instructions"}>
      <InstructionRenderer
        pages={pages}
        controlsData={controlsData}
      >
        <div className={styles.container}>
          <p>
            Al finalizar tu turno de supervisión te daremos un reporte de
            rendimiento.
          </p>
          <p>
            Continua querido operador, la iniciativa científica HCP espera
            grandes cosas de ti.
          </p>
          <p>
            ATT. Directiva de la HCP <img src="/heart.svg" alt="" />
          </p>
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default page2;
