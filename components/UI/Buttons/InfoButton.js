import style from "./InfoButton.module.scss";

const InfoButton = (props) => {
  return (
    <button onClick={props.onClick} className={style.button}>
      {props.children}
    </button>
  );
};

export default InfoButton;
