import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import keystrokes from "@/helpers/keystrokesValues";
import { useEffect, useRef, useState } from "react";
import styles from "./trivia.module.scss";

// JSON con las preguntas y sus respuestas
import { questions } from "./questionsData";

export default function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionTitle = useRef(null);

  const asideGeneralData = {
    h1: "IC-HCP",
    h2: "Iniciativa científica",
    pageDescription: "Preguntas de rutina",
    date: "La HCP desea evaluar tu desempeño, responde las siguientes preguntas",
  };

  useEffect(() => {
    function handleKeyAnswers(e) {
      const key = e.key;
      // Debe ser  - 2 porque se inicializa el estado con la primera pregunta y es base 0
      if (currentQuestion > questions.length - 2) {
        window.location.assign("/");
      }
      if (key == keystrokes.button0) {
        if (questions[currentQuestion]?.answers[0].correct) {
          questionTitle.current.style.backgroundColor = "green";
        } else {
          questionTitle.current.style.backgroundColor = "red";
        }
      }
      if (key == keystrokes.button1) {
        if (questions[currentQuestion]?.answers[1].correct) {
          questionTitle.current.style.backgroundColor = "green";
        } else {
          questionTitle.current.style.backgroundColor = "red";
        }
      }
      if (key == keystrokes.button2) {
        if (questions[currentQuestion]?.answers[2].correct) {
          questionTitle.current.style.backgroundColor = "green";
        } else {
          questionTitle.current.style.backgroundColor = "red";
        }
      }
      // Esto es para evitar que se pase de pregunta si se presiona otra tecla diferente a la de los botones
      if (
        key == keystrokes.button0 ||
        key == keystrokes.button1 ||
        key == keystrokes.button2
      ) {
        setTimeout(() => {
          questionTitle.current.style.backgroundColor = "initial";
          setCurrentQuestion((prevState) => prevState + 1);
        }, 1000);
      }
    }
    window.addEventListener("keyup", handleKeyAnswers);

    return () => {
      window.removeEventListener("keyup", handleKeyAnswers);
    };
  }, [currentQuestion]);

  return (
    <div className={styles.container}>
      <AsideGeneral props={asideGeneralData} />
      <div className={styles.main}>
        <div className={styles.question} ref={questionTitle}>
          <p>Pregunta</p>
          <h2>{questions[currentQuestion]?.ask}</h2>
        </div>
        <div className={styles.answers}>
          {questions[currentQuestion]?.answers.map((answer, index) => {
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
