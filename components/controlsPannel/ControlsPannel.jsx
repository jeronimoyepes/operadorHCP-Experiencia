import styles from "./controlsPannel.module.scss";

export default function ControlsPannel({ controls }) {
  return (
    <div>
      <p>controles</p>
      <div>
        {controls.map((control, index) => {
          return (
            <div key={index}>
              <img src={control.image} alt="" />
              <div>{control.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
