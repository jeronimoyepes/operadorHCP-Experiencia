import { useContext, useEffect, useState } from "react";

import Router from "next/router";

import AsideGeneral from "@/components/asideGeneral/AsideGeneral";

import styles from "./instructionRenderer.module.scss";
import ControlsPannel from "../controlsPannel/ControlsPannel";
import keystrokesValues from "@/helpers/keystrokesValues";
import { UserContext } from "pages/_app";

export default function InstructionRenderer({
  children,
  pages,
  pageCounter,
  controlsData,
  quitResponse
}) {
  const { sendDataToAPI } = useContext(UserContext);

  const asideGeneralData = {
    h1: "IC-HCP",
    h2: "Iniciativa científica",
    pageDescription: "Lista de actividades del operador",
    date: "28/09/1970",
  };

  useEffect(() => {
    children &&
      sendDataToAPI({
        page: "instructions-" + children._owner?.elementType?.name, //Extrae el nombre de la página
      });

    function handleKeyInstructions(e) {
      const key = e.key;
      if (key == keystrokesValues.button0) {
        // Capturar si es la última pantalla de las instrucciones
        if (pages.next == 6) {
          window.removeEventListener("keyup", handleKeyInstructions);
          // return window.location.assign("/sateliteConection");
          return Router.push("/sateliteConection");
        } else {
          Router.push(`./page${pages.next}`);
        }
      }
      if (key == keystrokesValues.button1 && quitResponse) {
        quitResponse.current.innerText = "El humor es siempre permitido dentro de límites razonables. ¡Feliz día Operador!"
      }
      if (key == keystrokesValues.button2) {
        if (pages.prev == 0) {
          return null;
        } else {
          window.removeEventListener("keyup", handleKeyInstructions);
          Router.push(`./page${pages.prev}`);
        }
      }
    }
    window.addEventListener("keyup", handleKeyInstructions);

    return () => {
      window.removeEventListener("keyup", handleKeyInstructions);
    };
  }, []);

  return (
    <div className={styles.container}>
      <AsideGeneral props={asideGeneralData}></AsideGeneral>
      <div className={styles.pages}>
        <div className={styles.children}>{children}</div>

        <div className={styles.counter}>
          {pageCounter?.map((page, index) => {
            return page.fill ? (
              <img key={index} src="/square-fill.svg" alt="↑" />
            ) : (
              <img key={index} src="/square-empty.svg" alt="5" />
            );
          })}
        </div>
        <img src="/warn-lines-long.svg" alt="" />
      </div>
      <ControlsPannel controls={controlsData} />
    </div>
  );
}
