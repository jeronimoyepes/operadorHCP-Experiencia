import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import keystrokes from "@/helpers/keystrokesValues";
import { useEffect, useState } from "react";
import styles from "./trivia.module.scss";

// JSON con las preguntas y sus respuestas
import { questions } from "./questionsData";

export default function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const asideGeneralData = {
    h1: "IC-HCP",
    h2: "Iniciativa científica",
    pageDescription: "Preguntas de rutina",
    date: "La HCP desea evaluar tu desempeño, responde las siguientes preguntas",
  };

  useEffect(() => {
    function handleKeyAnswers(e) {
      const key = e.key;
      // Debe ser  - 1 porque se inicializa el estado con la primera pregunta y es base 0
      if (currentQuestion > questions.length - 2) {
        window.location.assign("/");
      }
      if (key == keystrokes.button0) {
        questions[currentQuestion]?.answers.correct == 0 && alert("Chimba0");
      }
      if (key == keystrokes.button1) {
        questions[currentQuestion]?.answers.correct == 0 && alert("Chimba0");
      }
      if (key == keystrokes.button2) {
        questions[currentQuestion]?.answers.correct == 0 && alert("Chimba0");
      }
      setCurrentQuestion((prevState, props) => prevState + 1);
      console.log(currentQuestion)
    }
    window.addEventListener("keyup", handleKeyAnswers);

    return () => {
      window.removeEventListener("keyup", handleKeyAnswers);
    };
  }, [currentQuestion]);

  return (
    <div className={styles.container}>
      <AsideGeneral props={asideGeneralData} />
      <div>
        <div className={styles.question}>{questions[currentQuestion]?.ask}</div>
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
