import keystrokes from "@/helpers/keystrokesValues";
import { useEffect, useState } from "react";
import styles from "./sequenceInteraction.module.scss";

export default function SequenceInteraction({ sequence }) {
  const [currenteFrame, setCurrenteFrame] = useState();

  useEffect(() => {
    setCurrenteFrame(sequence[0]);
    function handleKeySequence(e) {
      const key = e.key;
      sequence.map((frame) => {
        if (frame.position == keystrokes.potentiometer[key]) {
          console.log(frame.position);
          setCurrenteFrame(frame);
        }
      });
    }
    window.addEventListener("keyup", handleKeySequence);

    return () => {
        setCurrenteFrame({});
        window.removeEventListener("keyup", handleKeySequence);
    }
  }, [sequence]);
  return (
    <div>
      <img src={currenteFrame?.path} alt="" />
    </div>
  );
}
