import styles from "./numberedBox.module.scss";

export const NumberedBox = ({ number, text }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_number}>
          <h2>{number}</h2>
        </div>
        <div className={styles.container_text}>
          <p>
            {text}
            <img src="/warn-lines.svg" alt="" />
          </p>
        </div>
      </div>
    </>
  );
};
