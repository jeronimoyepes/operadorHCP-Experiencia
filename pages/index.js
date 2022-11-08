import { useContext, useEffect } from "react";

import { NumberedBox } from "components/numberedBox/NumberedBox";
import { Layout } from "../components/layout/Layout";
import styles from "./index.module.scss";
import BorderContainer from "components/borderContainer/BorderContainer";
import Router from "next/router";
import { UserContext } from "./_app";

export default function Home() {
  const { sendDataToAPI } = useContext(UserContext);

  sendDataToAPI({
    page: "index",
  });

  const numberedBoxData = [
    {
      number: 1,
      text: "Conecta la consola al computador",
    },
    {
      number: 2,
      text: "Enciende la consola",
    },
  ];

  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key;
      if (key == "a") {
        document.removeEventListener("keyup", handleKeyDown);
        return Router.push("/instructions/page1");
      }
    }
    document.addEventListener("keyup", handleKeyDown);
  }, []);
  return (
    <Layout title={"Inicio"}>
      <div className={styles.container}>
        <div className={styles.aside}>
          <BorderContainer>
            <img src="instructionsConsole.gif" alt="" />
          </BorderContainer>
        </div>

        <div className={styles.boxes}>
          {numberedBoxData.map((boxData, index) => (
            <NumberedBox
              key={index}
              number={boxData.number}
              text={boxData.text}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
