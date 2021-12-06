import style from "./ProductCard.module.scss";
import Image from "next/image";

const ProductCard = (props) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <Image src={props.image} alt={props.title} />
        <div className={style.card_info}>
          <div className={style.info_title}>{props.title}</div>
          <div className={style.info_text}>{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
