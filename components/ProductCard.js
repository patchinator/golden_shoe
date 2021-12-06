import style from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={style.card}>
      <div className={style.image}></div>
      <div className={style.card_info}></div>
    </div>
  );
};

export default ProductCard;
