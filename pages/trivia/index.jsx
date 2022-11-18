import AsideGeneral from "@/components/asideGeneral/AsideGeneral";
import keystrokes from "@/helpers/keystrokesValues";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./triviaStyle.module.scss";

// JSON con las preguntas y sus respuestas
import { questions } from "./questionsData";
import { UserContext } from "pages/_app";

export default function Trivia() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { sendDataToAPI } = useContext(UserContext);

  const questionTitle = useRef(null);

  const asideGeneralData = {
    h1: "IC-HCP",
    h2: "Iniciativa científica",
    pageDescription: "Preguntas de rutina",
    date: "La HCP desea evaluar tu desempeño, responde las siguientes preguntas",
  };

  function checkCorrectAswer(answer) {
    const title = questionTitle.current;
    if (questions[currentQuestion]?.answers[answer].correct) {
      title.style.backgroundColor = "green";
      title.children[1].innerText = "Correcto";
    } else {
      title.style.backgroundColor = "red";
      title.children[1].innerText = "Incorrecto";
    }
  }

  useEffect(() => {
    function handleKeyAnswers(e) {
      const key = e.key;
      // Debe ser  - 2 porque se inicializa el estado con la primera pregunta y es base 0
      if (currentQuestion > questions.length - 2) {
        window.location.assign("/");
      }
      if (key == keystrokes.button0) {
        checkCorrectAswer(0);
      }
      if (key == keystrokes.button1) {
        checkCorrectAswer(1);
      }
      if (key == keystrokes.button2) {
        checkCorrectAswer(2);
      }
      // Esto es para evitar que se pase de pregunta si se presiona otra tecla diferente a la de los botones
      if (
        key == keystrokes.button0 ||
        key == keystrokes.button1 ||
        key == keystrokes.button2
      ) {
        // Enviar respuesta a la base de datos
        sendDataToAPI({
          page: "Trivia",
          triviaAnswer: Object.keys(keystrokes).find(
            (keyName) => keystrokes[keyName] === key
          ),
        });

        // Esperar un segundo para avanzar a siguiente pregunta y quitar el color de feedback de respuesta
        setTimeout(() => {
          questionTitle.current.style.backgroundColor = "initial";
          setCurrentQuestion((prevState) => prevState + 1);
        }, 1000);
        window.removeEventListener("keyup", handleKeyAnswers);
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
