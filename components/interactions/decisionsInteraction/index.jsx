import keystrokes from "@/helpers/keystrokesValues";
import { TimerContext } from "pages/mainExperience";
import { UserContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import ControlButton from "../../controlButton";
import styles from "./decisionsInteraction.module.scss";

export default function DecisionsInteraction({
  currentInteractionData,
  currentStation,
}) {
  const { sendDataToAPI } = useContext(UserContext);
  const context = useContext(TimerContext);


  const [decisionTaken, setDecisionTaken] = useState(null);

  useEffect(() => {
    function handleKeyDecision(e) {
      const key = e.key;
      if (key == keystrokes.button0) {
        setDecisionTakenOnButtonClic(0, key);
      }
      if (key == keystrokes.button1) {
        setDecisionTakenOnButtonClic(1, key);
      }
      if (key == keystrokes.button2) {
        setDecisionTakenOnButtonClic(2, key);
      }
    }
    window.addEventListener("keyup", handleKeyDecision);

    function setDecisionTakenOnButtonClic(decisionNumber, keyPressed) {
      if (currentInteractionData?.actions[decisionNumber]?.response) {
        setDecisionTaken(decisionNumber);

        sendDataToAPI({
          page: `station-${currentStation.id}`,
          baseInteraction_id: currentInteractionData.id,
          keystroke: Object.keys(keystrokes).find(
            (keyName) => keystrokes[keyName] === keyPressed
          ),
          timeElapsed: context.timeElapsed
        });

        window.removeEventListener("keyup", handleKeyDecision);
      }
    }

    return () => {
      setDecisionTaken(null);
      window.removeEventListener("keyup", handleKeyDecision);
    };
  }, [currentInteractionData]);

  return (
    <div className={styles.container}>
      {decisionTaken == null ? (
        <div className={styles.buttons}>
          {currentInteractionData.actions.map((action, index) => {
            return (
              <ControlButton
                action={action}
                index={index}
                key={index}
              ></ControlButton>
            );
          })}
        </div>
      ) : (
        <div className={styles.response}>
          <h2>R:</h2>
          <p>{currentInteractionData?.actions[decisionTaken]?.response}</p>
        </div>
      )}
    </div>
  );
}
