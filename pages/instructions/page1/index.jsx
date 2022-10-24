import { useEffect, useState } from "react";

// Modules

import styles from "./instructions.module.scss";

import PageRenderer from "@/components/instructions/Pagerenderer";

const Instructions = () => {
  const pages = {prev: 1, next: 2 };

  return (
    <PageRenderer pages={pages}>
      <h3>Bienvenido estimado operador.</h3>
      <p>
        el día de hoy estarás a cargo de supervisar las operaciones de
        investigacion científica de las siguientes bases de observación:
      </p>
      <img src="/stationsList.svg" alt="" />
    </PageRenderer>
  );
};

export default Instructions;
