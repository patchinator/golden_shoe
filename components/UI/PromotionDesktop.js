import style from "./PromotionDesktop.module.scss";

const PromotionDesktop = (props) => {
  return (
    <div className={style.promotion}>
      <div className={style.text_large}>{props.text}</div>
      <div className={style.text_small}>{props.text_two}</div>
    </div>
  );
};

export default PromotionDesktop;
