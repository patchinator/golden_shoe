import style from "./CategoryCard.module.scss";
import Image from "next/image";

const ProductCard = (props) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <Image src={props.image} alt={props.title} />
        <div className={style.card_info}>
          <div className={style.info_title}>{props.title.toUpperCase()}</div>
          <div className={style.info_text}>{props.text}</div>
          <div className={style.info_price}>
            <p>From:</p>
            <div>£{props.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
