import { createContext, useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import StationsRenderer from "@/components/stations/renderer";
import styles from "./mainExperience.module.scss";
import BorderContainer from "@/components/borderContainer/BorderContainer";
import keystrokes from "@/helpers/keystrokesValues";

export const Context = createContext();

export default function MainExperience() {
  const [currentStation, setCurrentStation] = useState();
  const [timeElapsed, setTimeLeft] = useState();

  // Duración de la experiencia en minutos
  const durationMinutes = 1

  // Temporizador de la experiencia
  const [experienceTimer, setExperienceTimer] = useState(`00:${durationMinutes}:00`);

  const experienceTotalDuration = durationMinutes * 60;
  let experienceTimeLeft = experienceTotalDuration;

  function updateCounter() {
    experienceTimeLeft--;
    if (experienceTimeLeft == 0) {
      return window.location.assign("/finalReport");
    }

    let minutes = Math.floor(experienceTimeLeft / 60);
    let seconds = Math.floor(experienceTimeLeft % 60);

    setExperienceTimer(
      `00:0${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    );
    setTimeLeft(experienceTotalDuration - experienceTimeLeft);
  }
  // Temporizador de la experiencia\

  useEffect(() => {
    setInterval(() => {
      updateCounter();
    }, 1000);
  }, []);

  useEffect(() => {
    function handleKeyMain(e) {
      const key = e.key;
      if (key == keystrokes.stationArtic) {
        setCurrentStation({ id: "artic", name: "Polar" });
      }
      if (key == keystrokes.stationSubmarine) {
        setCurrentStation({ id: "submarine", name: "Submarina" });
      }
      if (key == keystrokes.stationLunar) {
        setCurrentStation({ id: "lunar", name: "Lunar" });
      }
    }
    window.addEventListener("keyup", handleKeyMain);
  }, []);

  return (
    <Context.Provider value={{ timeElapsed, experienceTotalDuration }}>
      <Layout title={"Supervisión"}>
        {currentStation ? (
          <StationsRenderer
            experienceTimer={experienceTimer}
            currentStation={currentStation}
          />
        ) : (
          <>
            <div className={styles.container}>
              <BorderContainer>
                <img src="/succesfullConection.png" alt="" />
              </BorderContainer>
              <div className={styles.timerCont}>
                <div>
                  <p>{">>"}Tiempo restante para interrupción del enlace</p>
                  <div className={styles.timer}>{experienceTimer}</div>
                  <p>conéctate a alguna estación</p>
                  <img src="/conectSmall.png" alt="" />
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </Context.Provider>
  );
}
