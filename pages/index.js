import { NumberedBox } from "components/numberedBox/NumberedBox";
import { useEffect } from "react";
import { Layout } from "../components/layout/Layout";
import styles from "./index.module.scss";
import BorderContainer from "components/borderContainer/BorderContainer";

const fetchUser = async () => {
  const response = await fetch(`/api/hello`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const user = await response.json();
  return user;
};

export default function Home() {
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
