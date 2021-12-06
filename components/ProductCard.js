import style from "./ProductCard.module.scss";
import Image from "next/image";
import card_image from "./../assets/womens_shoes.jpg";

const ProductCard = () => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <Image src={card_image} alt="womens shoes" />
        <div className={style.card_info}>
          <div>test</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
