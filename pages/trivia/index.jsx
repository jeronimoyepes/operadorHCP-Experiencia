import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import keystrokes from "@/helpers/keystrokesValues";
import { useEffect } from "react";
import styles from "./Trivia.module.scss";

export default function Trivia() {
  const asideGeneralData = {
    h1: "IC-HCP",
    h2: "Iniciativa científica",
    pageDescription: "Preguntas de rutina",
    date: "La HCP desea evaluar tu desempeño, responde las siguientes preguntas",
  };

  const question = {
    question:
      "Eres un operador de comunicaciones para una institución de investigación científica a escala global.",
    answers: [
      {
        text: "0. Tú trabajo es supervisar los reportes enviados desde las diferentes.",
        correct: true,
      },
      {
        text: "1. Tú trabajo es supervisar los reportes enviados desde las diferentes.",
      },
      {
        text: "2. Tú trabajo es supervisar los reportes enviados desde las diferentes.",
      },
    ],
  };

  useEffect(() => {
    function handleKeyAnswers(e) {
      const key = e.key;
      console.log("concha")
      if (key == keystrokes.button0) {
        alert("Chimba0")
        // question.answers.some((answer) => answer.correct).indexOf == 0 && alert("Chimba0");
      }
      if (key == keystrokes.button1) {
        alert("Chimba1")
        // question.answers.some((answer) => answer.correct).indexOf == 1 && alert("Chimba1");
      }
      if (key == keystrokes.button2) {
        alert("Chimba2")
        // question.answers.some((answer) => answer.correct).indexOf == 2 && alert("Chimba2");
      }
    }
    window.addEventListener("keyup", handleKeyAnswers);

    return () => {
        window.removeEventListener("keyup", handleKeyAnswers);
    };
  }, []);

  return (
    <div className={styles.container}>
      <AsideGeneral props={asideGeneralData} />
      <div>
        <div className={styles.question}>{question.question}</div>
        <div className={styles.answers}>
          {question.answers.map((answer, index) => {
            return (
              <div key={index} className={styles.answers_answer}>
                <div className={styles.action}>
                  <span>{"R" + (index + 1)}</span>
                  <img src={`button-${index}.svg`} alt="" />
                </div>
                <div className={styles.text}>{answer.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
