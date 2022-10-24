import styles from "./controlsPannel.module.scss";

export default function ControlsPannel({ controls }) {
  return (
    <div className={styles.container}>
      <p>controles</p>
      <div>
        <div>
          {controls.map((control, index) => {
            return (
              <div key={index} className={styles.control}>
                <img src={control.image} alt="" />
                <p>{control.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
