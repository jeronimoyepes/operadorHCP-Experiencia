import DecisionsInteraction from "../../interactions/decisionsInteraction";
import { interactionsData } from "./interactions";
import styles from "./artic.module.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "pages/mainExperience";
import getTimeForEachInteraction from "../helpers/getTimeForEachInteraction";
import SequenceInteraction from "@/components/interactions/sequenceInteraction";

export default function Artic() {
  const context = useContext(Context);

  const [currentInteractionData, setCurrentInteractionData] = useState();

  const interactionTime = getTimeForEachInteraction(
    context.experienceTotalDuration,
    interactionsData.length
  );

  useEffect(() => {
    // Retornar la interacción cuyo rango de tiempo contenga el tiempo transcurrido de la experiencia
    interactionsData.map((interaction) => {
      const interactionTimeLimit =
        (interactionsData.indexOf(interaction) + 1) * interactionTime;
      // Si el tiempo transcurrido está dentro del rango de la interacción
      if (
        context.timeElapsed < interactionTimeLimit &&
        context.timeElapsed >= interactionTimeLimit - interactionTime
      ) {
        return setCurrentInteractionData(interaction);
      }
    });
  }, [context.timeElapsed]);

  return (
    <div className={styles.container}>
      {currentInteractionData && (
        <>
          <div className={styles.header}>
            {currentInteractionData.title}
            <img src={`reportType-${currentInteractionData.type}.png`} alt="" />
          </div>
          <div className={styles.body}>{currentInteractionData.body}</div>
          <div className={styles.sequence}>
            {currentInteractionData.sequence && (
              <SequenceInteraction sequence={currentInteractionData.sequence}/>
            )}
          </div>
          {currentInteractionData.actions && (
            <DecisionsInteraction
              currentInteractionData={currentInteractionData}
            />
          )}
        </>
      )}
    </div>
  );
}
