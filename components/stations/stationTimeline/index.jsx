import DecisionsInteraction from "../../interactions/decisionsInteraction";
import styles from "./stationTimeline.module.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "pages/mainExperience";
import getTimeForEachInteraction from "../helpers/getTimeForEachInteraction";
import SequenceInteraction from "@/components/interactions/sequenceInteraction";
import BorderContainer from "@/components/borderContainer/BorderContainer";

export default function StationTimeline({ interactionData }) {
  const context = useContext(Context);

  const [currentInteractionData, setCurrentInteractionData] = useState();

  const interactionTime = getTimeForEachInteraction(
    context.experienceTotalDuration,
    interactionData.length
  );

  useEffect(() => {
    // Retornar la interacción cuyo rango de tiempo contenga el tiempo transcurrido de la experiencia
    interactionData.map((interaction) => {
      const interactionTimeLimit =
        (interactionData.indexOf(interaction) + 1) * interactionTime;
      // Si el tiempo transcurrido está dentro del rango de la interacción
      if (
        context.timeElapsed < interactionTimeLimit &&
        context.timeElapsed >= interactionTimeLimit - interactionTime
      ) {
        return setCurrentInteractionData(interaction);
      }
    });
  }, [context.timeElapsed, interactionData]);

  return (
    <div className={styles.container}>
      {currentInteractionData && (
        <>
          <div className={styles.main}>
            <div className={styles.header}>
              {currentInteractionData.title}
              <img
                src={`reportType-${currentInteractionData.type}.svg`}
                alt=""
              />
            </div>
            <div className={styles.body}>
              {currentInteractionData.body}
              {currentInteractionData.type == "image" && (
                <div className={styles.interactionImage}>
                  <BorderContainer>
                    <img src={currentInteractionData.imagePath} alt="" />
                  </BorderContainer>
                </div>
              )}
            </div>
            <div className={styles.sequence}>
              {currentInteractionData.type == "sequence" ||
                (currentInteractionData.type == "signal" && (
                  <BorderContainer>
                    <SequenceInteraction
                      sequence={currentInteractionData.sequence}
                    />
                  </BorderContainer>
                ))}
            </div>
            {currentInteractionData.actions?.length > 0 && (
              <DecisionsInteraction
                currentInteractionData={currentInteractionData}
              />
            )}
          </div>

          <div className={styles.controls}>
            {currentInteractionData.type == "signal" && (
              <>
                <p>Controles</p>
                <img src="instructionIcon-knob.svg" alt="" />
              </>
            )}
            {currentInteractionData.type == "sequence" && (
              <>
                <p>Controles</p>
                <img src="instructionIcon-slider.svg" alt="" />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
