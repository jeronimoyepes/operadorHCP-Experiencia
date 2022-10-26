import { useEffect, useState } from "react";

import Router from "next/router";

import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import { Layout } from "@/components/layout/Layout";

import styles from "./instructionRenderer.module.scss";
import ControlsPannel from "../controlsPannel/ControlsPannel";

export default function InstructionRenderer({ children, pages, pageCounter, controlsData }) {
  const asideGeneralData = {
    h1: "IC-HCP",
    h2: "Iniciativa científica",
    pageDescription: "Lista de actividades del operador",
    date: "04/10/22",
  };

  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key;
      if (key == "ArrowRight") {
        // Capturar si es la última pantalla de las instrucciones
        if (pages.next == 6) {
          window.removeEventListener("keyup", handleKeyDown);
          return Router.push("/sateliteConection");
        } else {
          Router.push(`./page${pages.next}`);
        }
      }
      if (key == "ArrowLeft") {
        if (pages.prev == 0) {
          return null;
        } else {
          Router.push(`./page${pages.prev}`);
        }
      }
      window.removeEventListener("keyup", handleKeyDown);
    }
    window.addEventListener("keyup", handleKeyDown);
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
