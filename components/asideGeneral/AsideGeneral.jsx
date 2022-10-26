import styles from "./asideGeneral.module.scss";
export default function AsideGeneral({ props }) {
  const { h1, h2, pageDescription, date, img } = props;
  return (
    <div className={styles.container}>
      {h1 && (
        <div className={styles.title}>
          <h1>{h1}</h1>
          <h2>{h2}</h2>
        </div>
      )}
      <div className={styles.pageDescription}>
        <div>{">>"}</div>
        <p>{pageDescription}</p>
      </div>
      <div className={styles.date}>
        {date && <p>{date}</p>}
        {img && <img src={img} />}
      </div>
    </div>
  );
}
