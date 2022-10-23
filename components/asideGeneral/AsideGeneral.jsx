import styles from "./asideGeneral.module.scss";
export default function AsideGeneral(props) {
  const { h1, h2, description, date } = props;
  return (
    <div className={styles.container}>
      <div>
        <h1>{h1}</h1>
        <h2>{h2}</h2>
      </div>
      <div>
        <div>{">>"}</div>
        <p>{description}</p>
      </div>
      <div>
        <p>{date}</p>
      </div>
    </div>
  );
}
