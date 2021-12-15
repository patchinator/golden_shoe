import style from "./Promotion.module.scss";

const Promotion = (props) => {
  return (
    <div className={style.promotion}>
      <div className={style.text_large}>{props.text}</div>
      <div className={style.text_small}>{props.text_two}</div>
    </div>
  );
};

export default Promotion;
