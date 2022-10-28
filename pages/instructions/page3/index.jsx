// Modules
import styles from "../instructions.module.scss";

import InstructionRenderer from "@/components/instructions/InstructionRenderer";
import { Layout } from "@/components/layout/Layout";

const Page3 = () => {
  const pages = { prev: 2, next: 4 };
  const pageCounter = [
    { fill: false },
    { fill: false },
    { fill: true },
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
            Para observar los reportes conéctate a cada estación desde el
            tablero de control.
          </p>
          <div>
            <img src="/stationsOnConsole.png" alt="" />
          </div>
        </div>
      </InstructionRenderer>
    </Layout>
  );
};

export default Page3;
