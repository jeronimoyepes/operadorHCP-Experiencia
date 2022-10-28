import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import StationsRenderer from "@/components/stations/renderer";
import styles from "./mainExperience.module.scss";
import BorderContainer from "@/components/borderContainer/BorderContainer";

export default function MainExperience() {
  const [currentStation, setCurrentStation] = useState();

  // Temporizador de la experiencia
  const [experienceTimer, setExperienceTimer] = useState("00:10:00");

  const experienceTotalDuration = 10 * 60;
  let expericeTimeLeft = experienceTotalDuration;

  function updateCounter() {
    // console.log(expericeTimeLeft);
    expericeTimeLeft--;
    if (expericeTimeLeft == 0) {
      return window.location.assign("/finalReport");
    }

    let minutes = Math.floor(expericeTimeLeft / 60);
    let seconds = Math.floor(expericeTimeLeft % 60);

    setExperienceTimer(
      `00:0${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    );
  }
  // Temporizador de la experiencia\

  useEffect(() => {
    setInterval(() => {
      updateCounter();
    }, 1000);
  }, [])
  

  useEffect(() => {
    function handleKeyMain(e) {
      const key = e.key;
      if (key == "q") {
        setCurrentStation({id: "artic", name: "Polar"});
      }
      if (key == "w") {
        setCurrentStation({id: "submarine", name: "Submarina"});
      }
      if (key == "e") {
        setCurrentStation({id: "lunar", name: "Lunar"});
      }
    }
    window.addEventListener("keyup", handleKeyMain);
  }, []);

  return (
    <Layout title={"Supervisión"}>
      {currentStation ? (
        <StationsRenderer experienceTimer={experienceTimer} currentStation={currentStation} />
      ) : (
        <>
          <div className={styles.container}>
            <BorderContainer>
              <img src="/succesfullConection.png" alt="" />
            </BorderContainer>
            <div className={styles.timerCont}>
              <div>
                <p>{">>"}Tiempo restante para interrumpción del enlace</p>
                <div className={styles.timer}>{experienceTimer}</div>
                <p>conéctate a alguna estación</p>
                <img src="/conectSmall.png" alt="" />
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
