import keystrokes from "@/helpers/keystrokesValues";
import { TimerContext } from "pages/mainExperience";
import { UserContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import styles from "./sequenceInteraction.module.scss";

export default function SequenceInteraction({
  currentInteractionData,
  currentStation,
}) {
  const { sendDataToAPI } = useContext(UserContext);
  const context = useContext(TimerContext);

  const [currenteFrame, setCurrenteFrame] = useState();

  const sequence = currentInteractionData.sequence;

  useEffect(() => {
    setCurrenteFrame(sequence[0]);
    function handleKeySequence(e) {
      const key = e.key;
      sequence.map((frame) => {
        if (frame.position == keystrokes.potentiometer[key]) {
          setCurrenteFrame(frame);
          sendDataToAPI({
            page: `station-${currentStation.id}`,
            baseInteraction_id: currentInteractionData.id,
            keystroke: `potentiometer-${keystrokes.potentiometer[key]}`,
            timeElapsed: context.timeElapsed
          });
        }
      });
    }
    window.addEventListener("keyup", handleKeySequence);

    return () => {
      setCurrenteFrame({});
      window.removeEventListener("keyup", handleKeySequence);
    };
  }, [sequence]);

  return (
    <div className={styles.container}>
      <img src={currenteFrame?.path} alt="" />
    </div>
  );
}
