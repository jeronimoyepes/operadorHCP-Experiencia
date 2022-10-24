import { useEffect, useState } from "react";

// Modules
import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import { Layout } from "@/components/layout/Layout";

import styles from "./instructions.module.scss";

// Instruction pages
// import Page0 from "@/components/instructions/instructionPage/Page0";
// import Page1 from "@/components/instructions/instructionPage/Page1";
// import Page2 from "@/components/instructions/instructionPage/Page2";
// import Page3 from "@/components/instructions/instructionPage/Page3";

const Instructions = () => {
  const [instructionPage, setInstructionPage] = useState(0);
  // const [currentPage, setcurrentPage] = useState(<Page0 />);

  // const pages = [
  //   <Page0 key="0" />,
  //   <Page1 key="1" />,
  //   <Page2 key="2" />,
  //   <Page3 key="3" />,
  // ];

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key == "ArrowRight") {
        setInstructionPage(instructionPage + 1);
        return;
      }
      if (e.key == "ArrowLeft") {
        setInstructionPage(instructionPage - 1);
        return;
      }
    }
    window.addEventListener("keyup", handleKeyDown);

    return () => {
      window.removeEventListener("keyup", console.log("finished"));
    };
  }, []);

  // useEffect(() => {
  //   console.log(instructionPage);
  //   // switch (instructionPage) {
  //   //   case 0:
  //   //     setcurrentPage(<Page0 />);
  //   //     break;
  //   //   case 1:
  //   //     setcurrentPage(<Page1 />);
  //   //     break;
  //   //   case 2:
  //   //     setcurrentPage(<Page2 />);
  //   //     break;
  //   //   case 3:
  //   //     setcurrentPage(<Page3 />);
  //   //     break;
  //   // }
  // }, [instructionPage]);

  const asideGeneralData = {
    h1: "IC-HCP",
    h2: "Iniciativa científica",
    pageDescription: "Lista de actividades del operador",
    date: "04/10/22",
  };

  return (
    <Layout title="Actividades">
      <div className={styles.container}>
        <AsideGeneral props={asideGeneralData}></AsideGeneral>
        <div className={styles.pages}>
          {/* {currentPage} */}
          {console.log(instructionPage)}
          <div>
            {/* {pagesAmount.map((page) => {
              return <a href="">a</a>;
            })} */}
            asdadsfas fas asd fasd f
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Instructions;
