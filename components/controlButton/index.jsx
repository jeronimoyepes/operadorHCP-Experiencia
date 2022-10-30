import styles from "./controlButton.module.scss"

export default function ControlButton({ action,  index }) {
  return (
    <div className={styles.control}>
      <img src={`button-${index}.svg`} alt="" />
      <p>{action.name}</p>
    </div>
  );
}
