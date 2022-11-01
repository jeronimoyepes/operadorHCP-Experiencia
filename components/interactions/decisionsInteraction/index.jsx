import keystrokes from "@/helpers/keystrokesValues";
import { useEffect, useState } from "react";
import ControlButton from "../../controlButton";
import styles from "./decisionsInteraction.module.scss";

export default function DecisionsInteraction({ currentInteractionData }) {
  const [decisionTaken, setDecisionTaken] = useState(null);

  useEffect(() => {
    function handleKeyDecision(e) {
      const key = e.key;
      if (key == keystrokes.button0) {
        setDecisionTakenOnButtonClic(0);
      }
      if (key == keystrokes.button1) {
        setDecisionTakenOnButtonClic(1);
      }
      if (key == keystrokes.button2) {
        setDecisionTakenOnButtonClic(2);
      }
    }
    window.addEventListener("keyup", handleKeyDecision);

    function setDecisionTakenOnButtonClic(int) {
      if (currentInteractionData?.actions[int]?.response) {
        setDecisionTaken(int);
        window.removeEventListener("keyup", handleKeyDecision);
      }
    }

    return () => {
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
