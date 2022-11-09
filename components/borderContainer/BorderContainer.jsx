import styles from "./borderContainer.module.scss";

export default function BorderContainer({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.topBorder}>
        <img src="corner.svg" alt="" />
        <img className={styles.warnlines} src="warn-lines.svg" alt="" />
        <img src="corner.svg" alt="" />
      </div>
      <div className={styles.border_content}>{children}</div>
      <div className={styles.botBorder}>
        <img src="corner.svg" alt="" />
        <img className={styles.warnlines} src="warn-lines.svg" alt="" />
        <img src="corner.svg" alt="" />
      </div>
    </div>
  );
}
