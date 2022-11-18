import styles from "./index.module.scss";

export default function Index() {
  const stepsData = [
    {
      number: 1,
      text: "Eres un operador de comunicaciones para una institución de investigación científica a escala global.",
    },
    {
      number: 2,
      text: "Tú trabajo es supervisar los reportes enviados desde las diferentes estaciones de investigacion.",
    },
    {
      number: 3,
      text: "Los contenidos son ficticios y la experiencia tiene una duración determinada, al finalizarla se te presentará un informe con tu actividad y pedirá responder unas preguntas.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.title}>
            <h2>Esta es una experiencia interactiva</h2>
          </div>
          {stepsData.map((step) => {
            return (
              <div className={styles.step}>
                <h3>{step.number}</h3>
                <p>{step.text}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.aside}>
          <img src="console-vector.svg" alt="" />
          <p>
            Debes tener el tablero de control para poder interactuar con la
            experiencia a partir de este punto
          </p>
          <a href="#" onClick={() => window?.location.assign("/firstSteps")}>Continuar</a>
          <span>* Desactiva las máyusculas</span>
          <span>* Mejor en pantalla completa, presionar [F11]</span>
        </div>
      </div>
    </div>
  );
}
