import { useEffect } from "react";

import { NumberedBox } from "components/numberedBox/NumberedBox";
import { Layout } from "../components/layout/Layout";
import styles from "./index.module.scss";
import BorderContainer from "components/borderContainer/BorderContainer";

const data = {
  user_id: "hash",
  date: "date",
  page: "index",
  baseInteraction_id: "string",
  keystroke: "string",
};

const fetchUser = async () => {
  const response = await fetch(`/api/hello`, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return;
    // throw new Error(`Error: ${response.status}`);
  }

  const user = await response.json();
  console.log(user);
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
  useEffect(() => {
    fetchUser();
    function handleKeyDown(e) {
      const key = e.key;
      if (key == "a") {
        document.removeEventListener("keyup", handleKeyDown);
        return location.replace("/instructions/page1");
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
